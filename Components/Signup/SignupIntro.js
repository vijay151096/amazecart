import React, {useContext, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {lightColor} from '../../Styles/LightColor';
import BoldTitle from '../Core/BoldTitle';
import {ThemeContext} from '../../Store/ThemeContextProvider';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

function SignupIntro() {
  const {themeColors} = useContext(ThemeContext);
  const opacityValue = useSharedValue(0);
  const opacityFadeOut = useAnimatedStyle(() => {
    return {opacity: opacityValue.value};
  });

  useEffect(() => {
    opacityValue.value = withTiming(1, {duration: 2000});
  }, []);
  return (
    <View style={styles.mainContainer}>
      <BoldTitle>Hey,</BoldTitle>
      <Animated.View style={[styles.mainTextContainer, opacityFadeOut]}>
        <BoldTitle style={{color: themeColors.purple}}>Signup </BoldTitle>
        <BoldTitle style={{color: themeColors.lightBlue}}>Now.</BoldTitle>
      </Animated.View>
    </View>
  );
}

export default SignupIntro;

const styles = StyleSheet.create({
  mainTextContainer: {
    flexDirection: 'row',
  },
  mainContainer: {
    flex: 1,
    marginTop: 20,
  },
  signup: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  signupBtn: {
    marginLeft: 8,
  },
});
