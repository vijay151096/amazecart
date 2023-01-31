import React, {useContext, useEffect} from 'react';
import {Text, Image} from 'react-native';
import LogoutIcon from '../Components/Core/LogoutIcon';
import { WebView } from 'react-native-webview';

const Profile = () => {
  return (
    <WebView
      source={{uri: 'http://localhost:3000/'}}
      style={{marginTop: 20}}
    />
  );
};

export default Profile;
