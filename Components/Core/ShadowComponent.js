import React from 'react';
import {StyleSheet, View} from 'react-native';
import useTheme from '../../Store/Hooks/useTheme';

const ShadowComponent = ({children, style}) => {
  const {themeColors} = useTheme();

  return (
    <View
      style={[
        styles.shadowContainer,
        style,
        {
          shadowColor: themeColors.shadowGrey,
          backgroundColor: themeColors.shadowWhite,
        },
      ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  shadowContainer: {
    flex: 1,
    elevation: 5,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
});

export default ShadowComponent;
