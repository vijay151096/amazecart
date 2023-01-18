import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {color} from '../../Styles/Color';

const AppLoading = () => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <ActivityIndicator size="large" color={color.purple} />
    </View>
  );
};

export default AppLoading;
