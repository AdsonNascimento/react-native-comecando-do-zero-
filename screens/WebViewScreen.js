import React, { useEffect } from 'react';
import { WebView } from 'react-native-webview';
import { View, StyleSheet } from 'react-native';

const WebViewScreen = ({ route }) => {
  const { inputValue } = route.params;

  const iframeCode = `<iframe width="100%" height="100%" src="https://aagenciadigital.com/foyer/${inputValue}" frameborder="0" allowfullscreen></iframe>`;
  return (
    <View style={styles.container}>
      <WebView
        source={{ html: iframeCode }}
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default WebViewScreen;