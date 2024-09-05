import React, { useRef, useState, useEffect } from 'react';
import { WebView, WebViewMessageEvent } from 'react-native-webview';
import { Platform, StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { useNavigation } from 'expo-router';

interface WebViewMessage {
  type: string;
  url: string;
}

const HomeScreen = () => {
  const webViewRef = useRef<WebView>(null);
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const [webViewUrl, setWebViewUrl] = useState('http://');
  const navigation = useNavigation();

  const backgroundColor = isDarkMode ? '#101014' : '#F4F4F5';

  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', () => {
      const now = new Date().getTime();
      const lastPressTime = (webViewRef.current as any).lastPressTime || 0;

      if (now - lastPressTime < 300) {
        webViewRef.current?.injectJavaScript(`
          window.scrollTo({top: 0, behavior: 'smooth'});
          true;
        `);
      }

      (webViewRef.current as any).lastPressTime = now;
    });

    return unsubscribe;
  }, [navigation]);

  const handleWebViewMessage = (event: WebViewMessageEvent) => {
    try {
      const data: WebViewMessage = JSON.parse(event.nativeEvent.data);
      if (data.type === 'NAVIGATE') {
        if (data.url.startsWith('/emergency-alert')) {
          router.navigate({
            pathname: 'detail',
            params: { initialUrl: `http://${data.url}` },
          });
        } else {
          setWebViewUrl(`http://${data.url}`);
        }
      }
    } catch (error) {
      console.error('Failed to parse WebView message', error);
    }
  };

  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={backgroundColor} />
      <SafeAreaView style={[styles.safearea, { backgroundColor }]}>
        <WebView
          ref={webViewRef}
          source={{ uri: webViewUrl }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          onMessage={handleWebViewMessage}
          onNavigationStateChange={event => {
            console.log(event);
          }}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safearea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});

export default HomeScreen;
