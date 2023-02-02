import React, {useContext, useState} from 'react';
import WebView from 'react-native-webview';
import AppLoading from '../Components/Core/AppLoading';
import {AuthContext} from '../Store/AuthContextProvider';

function GithubWebView() {
  const {githubSignIn} = useContext(AuthContext);
  const [inWebView, setInWebView] = useState(true);

  const handleNavigation = ({url}) => {
    if (url.includes('code=')) {
      const authCode = url.split('code=')[1];
      githubSignIn(authCode);
      setInWebView(false);
    }
  };

  if (!inWebView) {
    return <AppLoading />;
  }

  return (
    <WebView
      source={{
        uri: 'https://github.com/login/oauth/authorize?client_id=4fd76e7ca0b424346f8b&redirect_uri=https://reactnativeamazecart.com',
      }}
      onNavigationStateChange={handleNavigation}
    />
  );
}

export default GithubWebView;
