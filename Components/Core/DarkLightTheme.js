import React, {useContext} from 'react';
import {Pressable, Text, View} from 'react-native';
import {ThemeContext} from '../../Store/ThemeContextProvider';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {lightColor} from '../../Styles/LightColor';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function DarkLightTheme(props) {
  const {isDarkMode, changeTheme, themeColors} = useContext(ThemeContext);
  return (
    <Pressable onPress={changeTheme}>
      <View
        style={{
          paddingRight: 20,
        }}>
        {isDarkMode ? (
          <FontAwesome name={'sun-o'} size={24} color={themeColors.black} />
        ) : (
          <FontAwesome5 name={'moon'} size={24} color={themeColors.black} />
        )}
      </View>
    </Pressable>
  );
}

export default DarkLightTheme;
