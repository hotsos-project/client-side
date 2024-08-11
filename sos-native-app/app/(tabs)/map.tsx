import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';

const MapScreen = () => {
  return (
    <WebView
      style={styles.container}
      source={{ uri: 'http://192.168.0.16:3000/map' }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MapScreen;
