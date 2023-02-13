import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {lightColor} from '../../Styles/LightColor';

const AppLoading = () => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <ActivityIndicator size="large" color={lightColor.purple} />
    </View>
  );
};

export default AppLoading;
