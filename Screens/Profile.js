import React, {useContext, useEffect} from 'react';
import {Text, Image} from 'react-native';
import LogoutIcon from '../Components/Core/LogoutIcon';
import {WebView} from 'react-native-webview';
import Config from 'react-native-config';

const Profile = () => {
  const {WEB_VIEW_URL} = Config;

  return <WebView source={{uri: WEB_VIEW_URL}} style={{marginTop: 20}} />;
};

export default Profile;
