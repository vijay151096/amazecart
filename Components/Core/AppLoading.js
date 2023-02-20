import React, {useContext} from 'react';
import {ActivityIndicator, View} from 'react-native';
import useTheme from '../../Store/Hooks/useTheme';

const AppLoading = () => {
  const {themeColors} = useTheme()
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <ActivityIndicator size="large" color={themeColors.purple} />
    </View>
  );
};

export default AppLoading;
