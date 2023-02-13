import React, {useContext} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {lightColor} from '../../Styles/LightColor';
import {ThemeContext} from '../../Store/ThemeContextProvider';

const AppLoading = () => {
  const {themeColors} = useContext(ThemeContext);
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <ActivityIndicator size="large" color={themeColors.purple} />
    </View>
  );
};

export default AppLoading;
