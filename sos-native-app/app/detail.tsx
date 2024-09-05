import React, { useState, useEffect } from 'react';
import { WebView } from 'react-native-webview';
import { useLocalSearchParams, Stack } from 'expo-router';
import { StyleSheet, useColorScheme } from 'react-native';

// Color Theme
const lightTheme = {
  backgroundColor: '#ffffff',
  color: '#1a1a1a',
};

const darkTheme = {
  backgroundColor: '#18181B',
  color: '#FCFCFC',
};

const BrowserScreen = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  const { initialUrl } = useLocalSearchParams<{ initialUrl: string }>();
  const [headerTitle, setHeaderTitle] = useState<string | null>(null);

  useEffect(() => {
    if (initialUrl) {
      const urlParts = initialUrl.split('/');
      const lastPart = urlParts[urlParts.length - 1];

      if (initialUrl.includes('/emergency-alert')) {
        if (isNaN(Number(lastPart))) {
          setHeaderTitle('재난 문자');
        } else {
          setHeaderTitle(null);
        }
      } else {
        setHeaderTitle('');
      }
    } else {
      setHeaderTitle('');
    }
  }, [initialUrl]);

  return (
    <>
      <Stack.Screen
        options={{
          title: headerTitle || '',
          headerBackTitle: '뒤로',
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: theme.backgroundColor,
          },
          headerTitleStyle: {
            color: theme.color,
            fontFamily: 'Pretendard-SemiBold',
          },
          headerTintColor: theme.color,
        }}
      />
      {initialUrl ? (
        <WebView source={{ uri: initialUrl }} style={styles.webview} />
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  webview: {
    flex: 1,
  },
});

export default BrowserScreen;
