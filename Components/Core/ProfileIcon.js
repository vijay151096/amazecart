import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import useTheme from '../../Store/Hooks/useTheme';

const ProfileIcon = () => {
  const navigation = useNavigation();
  const {themeColors} = useTheme();
  return (
    <Pressable onPress={() => navigation.navigate('profile')}>
      <MaterialCommunityIcons
        name={'account'}
        size={35}
        color={themeColors.black}
      />
    </Pressable>
  );
};

export default ProfileIcon;
