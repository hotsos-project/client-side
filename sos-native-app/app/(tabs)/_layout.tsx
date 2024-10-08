import { Tabs, useNavigation } from 'expo-router';
import MaterialIcon from '@expo/vector-icons/MaterialIcons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useColorScheme } from 'react-native';
import { Platform } from 'react-native';
import { useRef } from 'react';

// Color Theme
const lightTheme = {
  backgroundColor: '#ffffff',
  color: '#1a1a1a',
  inactive: '#b3b3b3',
  border: '#E6E6E6',
};

const darkTheme = {
  backgroundColor: '#18181B',
  color: '#FCFCFC',
  inactive: '#595959',
  border: '#2B2B2B',
};

const HomeIcon = ({ focused, color }: { focused: boolean; color: string }) => {
  return <MaterialIcon name="home" color={color} size={24} />;
};

const EmergencyIcon = ({
  focused,
  color,
}: {
  focused: boolean;
  color: string;
}) => {
  return <MaterialIcon name="phone" color={color} size={24} />;
};

const MapIcon = ({ focused, color }: { focused: boolean; color: string }) => {
  return <MaterialIcon name="place" color={color} size={24} />;
};

const SocialIcon = ({
  focused,
  color,
}: {
  focused: boolean;
  color: string;
}) => {
  return <MaterialIcon name="forum" color={color} size={24} />;
};

const MypageIcon = ({
  focused,
  color,
}: {
  focused: boolean;
  color: string;
}) => {
  const IconName = focused ? 'home' : 'home-outline';
  return <MaterialIcon name="person" color={color} size={24} />;
};

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  const navigation = useNavigation();
  const lastTabPressTimeRef = useRef<{ [key: string]: number }>({});

  const handleTabPress = (routeName: string) => {
    const now = new Date().getTime();
    const lastPressTime = lastTabPressTimeRef.current[routeName] || 0;

    if (now - lastPressTime < 300) {
      navigation.emit({
        type: 'tabDoubleTap',
        target: routeName,
      });
    }

    lastTabPressTimeRef.current[routeName] = now;
  };

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.backgroundColor,
          height: Platform.OS === 'android' ? 84 : 80,
          paddingTop: 8,
          paddingBottom: 24,
          borderTopWidth: 1,
          borderTopColor: theme.border,
        },
        tabBarActiveTintColor: theme.color,
        tabBarInactiveTintColor: theme.inactive,
        tabBarIconStyle: {
          marginTop: 4,
          marginBottom: 8,
        },
        tabBarLabelStyle: {
          fontFamily: 'Pretendard-Regular',
          fontSize: 12,
        },
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: '홈',
          tabBarIcon: HomeIcon,
        }}
      />
      <Tabs.Screen
        name="emergency"
        options={{ tabBarLabel: '긴급신고', tabBarIcon: EmergencyIcon }}
      />
      <Tabs.Screen
        name="map"
        options={{ tabBarLabel: '지도', tabBarIcon: MapIcon }}
      />
      <Tabs.Screen
        name="social"
        options={{ tabBarLabel: '게시판', tabBarIcon: SocialIcon }}
      />
      <Tabs.Screen
        name="mypage"
        options={{ tabBarLabel: '마이페이지', tabBarIcon: MypageIcon }}
      />
    </Tabs>
  );
}
