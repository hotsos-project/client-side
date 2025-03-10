import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { Alert, PermissionsAndroid, Platform } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [loaded, error] = useFonts({
    'Pretendard-Regular': require('../assets/fonts/Pretendard-Regular.otf'),
    'Pretendard-Medium': require('../assets/fonts/Pretendard-Medium.otf'),
    'Pretendard-SemiBold': require('../assets/fonts/Pretendard-SemiBold.otf'),
    'Pretendard-Bold': require('../assets/fonts/Pretendard-Bold.otf'),
  });

  const [fcmToken, setFcmToken] = useState(''); // fcmToken
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 }); // 위치
  const [address, setAddress] = useState({ sido: '', gugun: '' }); // 위도경도 변환된 주소
  const [locationPermissionGranted, setLocationPermissionGranted] = useState(false);
  const [notificationPermissionGranted, setNotificationPermissionGranted] = useState(false);
  
  // 알림 권한 요청 함수
  const requestUserPermission = async () => {
    try {
      if (Platform.OS === 'android' && Platform.Version >= 33) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
          {
            title: '알림 권한 요청',
            message: '이 앱은 알림 권한이 필요합니다.',
            buttonNeutral: '나중에',
            buttonNegative: '취소',
            buttonPositive: '허용',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('알림 권한이 허용되었습니다.');
          setNotificationPermissionGranted(true);
        } else {
          console.log('알림 권한이 거부되었습니다.');
        }
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } else {
        setNotificationPermissionGranted(true);
        return true;
      }
    } catch (error) {
      console.error('알림 권한 요청 중 오류 발생:', error);
      return false;
    }
  };

  // 위치 권한 요청 함수
  const requestLocationPermission = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: '위치 접근 권한',
            message: '앱이 위치 정보를 필요로 합니다.',
            buttonNeutral: '나중에',
            buttonNegative: '취소',
            buttonPositive: '확인',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('위치 권한이 허용되었습니다.');
          setLocationPermissionGranted(true);
        }
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } else {
        return true;
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  // 위치 추적 초기화 함수
  const initLocationTracking = async () => {
    if (!locationPermissionGranted) {
      const hasPermission = await requestLocationPermission();
      if (!hasPermission) {
        Alert.alert('위치 권한 필요', '앱을 사용하려면 위치 권한이 필요합니다.');
        return;
      }
    }
    const watchId = Geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        getCityAndDistrict(latitude, longitude);
        console.log(`실시간 위치 업데이트: 위도: ${latitude}, 경도: ${longitude}`);
      },
      (error) => {
        console.error('위치 정보를 가져오는데 실패했습니다:', error.message);
      },
      { enableHighAccuracy: true, distanceFilter: 1 }
    );

    return () => Geolocation.clearWatch(watchId);
  };

  const getCityAndDistrict = async (latitude: number, longitude: number) => {
    const apiKey = process.env.EXPO_PUBLIC_KAKAO_API_KEY;
    const response = await fetch(
      `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${longitude}&y=${latitude}`,
      {
        headers: {
          Authorization: `KakaoAK ${apiKey}`,
        },
      }
    );
    const data = await response.json();

    if (data.documents && data.documents.length > 0) {
      const address = data.documents[0].address;
      const sido = address.region_1depth_name;  // 시도
      const gugun = address.region_2depth_name; // 구군
      console.log(sido + " " + gugun);
      setAddress({ sido, gugun });
    } else {
      console.error('Geocoding error:', data);
    }
  };


  // const sendLocationChangeToBackend = async (sido: string, gugun: string) => {
  //   try {
  //     // 여기에 백엔드로 위치 변경 요청을 보내는 로직을 추가
  //     const response = await fetch('YOUR_BACKEND_ENDPOINT', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         sido,
  //         gugun,
  //       }),
  //     });

  //     if (!response.ok) {
  //       throw new Error('위치 변화를 요청 실패');
  //     }

  //     console.log('위치 변화를 요청 성공 요청');
  //   } catch (error) {
  //     console.error('위치 변화 요청 중 오류 발생:', error);
  //   }
  // };

  // FCM 초기화 함수
  const initFCM = async () => {
    if (!notificationPermissionGranted) {
      const hasPermission = await requestUserPermission();
      if (!hasPermission) {
        Alert.alert('알림 권한 필요', '앱을 사용하려면 알림 권한이 필요합니다.');
        return;
      }
    }

    messaging()
      .getToken()
      .then((token) => {
        setFcmToken(token); // 토큰을 상태에 저장
      })
      .catch((error) => {
        console.error('Token error:', error);
      });

    messaging()
      .getInitialNotification()
      .then(async (remoteMessage) => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification
          );
        }
      })
      .catch((error) => {
        console.error('Initial notification error:', error);
      });

    messaging().onNotificationOpenedApp((remoteMessage: FirebaseMessagingTypes.RemoteMessage) => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification
      );
    });

    messaging().setBackgroundMessageHandler(async (remoteMessage: FirebaseMessagingTypes.RemoteMessage) => {
      console.log('Message handled in the background!', remoteMessage);
      await notifee.displayNotification({
        title: remoteMessage.notification?.title || '알림',
        body: remoteMessage.notification?.body || '알림 본문이 없습니다.',
      });
    });

    const unsubscribe = messaging().onMessage(async (remoteMessage: FirebaseMessagingTypes.RemoteMessage) => {
      Alert.alert(`새 알림이 도착했습니다 !\n${remoteMessage.notification?.title}`, remoteMessage.notification?.body);

      await notifee.displayNotification({
        title: remoteMessage.notification?.title || '알림',
        body: remoteMessage.notification?.body || '알림 본문이 없습니다.',
        android: {
          channelId: 'default',
          smallIcon: 'ic_launcher', // 작은 아이콘을 변경하려면 이 경로를 사용
          color: '#4caf50', // 아이콘의 배경색
          actions: [
            {
              title: 'View',
              pressAction: { id: 'view' },
            },
            {
              title: 'Dismiss',
              pressAction: { id: 'dismiss' },
            },
          ],
        },
      });
    });
    return unsubscribe;
  };

  // 앱 초기화 처리
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  useEffect(() => {
    const initializePermissions = async () => {
      const locationGranted = await requestLocationPermission();
      const notificationGranted = await requestUserPermission();
      
      if (locationGranted) {
        initLocationTracking();
      }
      
      if (notificationGranted) {
        initFCM(); // initFCM에서 권한 요청을 생략하고 초기화만 수행
      }
    };
    initializePermissions();
  }, []);

  useEffect(() => {
    if (fcmToken) {
      // 여기에 FCM 토큰을 서버에 전송하는 로직 추가
      console.log('FCM 토큰이 변경되었습니다:', fcmToken);
    }
  }, [fcmToken]);

  // useEffect(() => {
  //   if (address.sido && address.gugun) {
  //     sendLocationChangeToBackend(address.sido, address.gugun);
  //   }
  // }, [address]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="detail" />
    </Stack>
  );
}
