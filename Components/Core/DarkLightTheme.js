import React from 'react';
import {Pressable, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import useTheme from '../../Store/Hooks/useTheme';

function DarkLightTheme(props) {
  const {isDarkMode, changeTheme, themeColors} = useTheme();
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
