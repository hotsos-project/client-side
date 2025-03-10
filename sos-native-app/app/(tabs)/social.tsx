import { WebView } from 'react-native-webview';
import { StatusBar, StyleSheet, useColorScheme,Platform } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';

const SocialScreen = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const backgroundColor = isDarkMode ? '#101014' : '#F4F4F5';
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={backgroundColor} />
      <SafeAreaView style={[styles.safearea, { backgroundColor }]}>
      <WebView
      source={{ uri: 'http://10.0.2.2:3000/social' }}
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
export default SocialScreen;