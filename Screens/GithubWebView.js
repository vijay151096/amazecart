import React, {useContext, useState} from 'react';
import WebView from 'react-native-webview';
import AppLoading from '../Components/Core/AppLoading';
import {AuthContext} from '../Store/AuthContextProvider';
import Config from 'react-native-config';

function GithubWebView() {
  const {AUTH_URL, CLIENT_ID, REDIRECT_URI} = Config;
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
        uri: `${AUTH_URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`,
      }}
      onNavigationStateChange={handleNavigation}
    />
  );
}

export default GithubWebView;
