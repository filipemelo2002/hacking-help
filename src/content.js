import React from "react";

import { WebView } from "react-native-webview";

// import { Container } from './styles';

const Content = ({ route }) => {
  const { uri } = route.params;
  return <WebView style={{ flex: 1 }} source={{ uri }} />;
};

export default Content;
