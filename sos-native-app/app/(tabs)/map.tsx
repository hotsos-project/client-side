import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';

const MapScreen = () => {
  return (
    <WebView
      style={styles.container}
      source={{ uri: 'http:///map' }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MapScreen;
