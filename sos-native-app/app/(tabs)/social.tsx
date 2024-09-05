import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';

const SocialScreen = () => {
  return (
    <WebView
      style={styles.container}
      source={{ uri: 'http:///social' }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SocialScreen;
