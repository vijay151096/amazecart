import React, {useContext, useEffect} from 'react';
import {Text, Image} from 'react-native';
import LogoutIcon from '../Components/Core/LogoutIcon';

const Profile = () => {
  return (
    <>
      <Image source={require('../assets/images/sample.jpeg')} />
      <Text>Profile</Text>
      <LogoutIcon />
    </>
  );
};

export default Profile;
