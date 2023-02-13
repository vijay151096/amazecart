import React, {useContext} from 'react';
import {Pressable, Text, View} from 'react-native';
import {ThemeContext} from '../../Store/ThemeContextProvider';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {lightColor} from '../../Styles/LightColor';
import Entypo from 'react-native-vector-icons/Entypo';

function DarkLightTheme(props) {
  const {isDarkMode, changeTheme, themeColors} = useContext(ThemeContext);
  return (
    <Pressable onPress={changeTheme}>
      <View
        style={{
          paddingRight: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <MaterialCommunityIcons
          name={'theme-light-dark'}
          size={24}
          color={themeColors.black}
        />
      </View>
    </Pressable>
  );
}

export default DarkLightTheme;
