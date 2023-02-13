import React, {useContext} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {lightColor} from '../../Styles/LightColor';
import {Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ThemeContext} from '../../Store/ThemeContextProvider';

const ProfileIcon = () => {
  const navigation = useNavigation();
  const {themeColors} = useContext(ThemeContext);
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
