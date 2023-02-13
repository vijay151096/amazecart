import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {lightColor} from '../../Styles/LightColor';
import {Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ProfileIcon = () => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate('profile')}>
      <MaterialCommunityIcons
        name={'account'}
        size={35}
        color={lightColor.black}
      />
    </Pressable>
  );
};

export default ProfileIcon;
