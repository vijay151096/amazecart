import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {ThemeContext} from '../../Store/ThemeContextProvider';

const ShadowComponent = ({children, style}) => {
  const {themeColors} = useContext(ThemeContext);

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
