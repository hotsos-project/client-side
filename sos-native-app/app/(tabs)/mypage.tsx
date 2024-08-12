import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';

const MypageScreen = () => {
  return (
    <WebView
      style={styles.container}
      source={{ uri: 'http:///mypage' }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MypageScreen;
