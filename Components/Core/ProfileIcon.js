import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {color} from '../../Styles/Color';
import {Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ProfileIcon = () => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate('profile')}>
      <MaterialCommunityIcons name={'account'} size={35} color={color.black} />
    </Pressable>
  );
};

export default ProfileIcon;
