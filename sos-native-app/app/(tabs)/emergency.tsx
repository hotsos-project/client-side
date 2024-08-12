import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';

const EmergencyScreen = () => {
  return (
    <WebView
      style={styles.container}
      source={{ uri: 'http:///emergency' }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default EmergencyScreen;
