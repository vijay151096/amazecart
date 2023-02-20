import React, {useEffect} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import BoldTitle from '../Core/BoldTitle';
import {useNavigation} from '@react-navigation/native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import useTheme from '../../Store/Hooks/useTheme';

function LoginIntro() {
  const navigation = useNavigation();
  const {themeColors} = useTheme();

  const opacityValue = useSharedValue(0);
  const opacityFadeOut = useAnimatedStyle(() => {
    return {opacity: opacityValue.value};
  });

  useEffect(() => {
    opacityValue.value = withTiming(1, {duration: 1000});
  }, []);

  return (
    <View style={styles.mainContainer} testID="LoginIntro-mainContainer">
      <BoldTitle>Hey,</BoldTitle>
      <Animated.View
        style={[styles.mainTextContainer, opacityFadeOut]}
        testID="LoginIntro-loginText">
        <BoldTitle style={[styles.loginText, {color: themeColors.purple}]}>
          Login{' '}
        </BoldTitle>
        <BoldTitle style={[styles.nowText, {color: themeColors.lightBlue}]}>
          Now.
        </BoldTitle>
      </Animated.View>
      <View style={styles.signup}>
        <Text style={[styles.signupText, {color: themeColors.darkGrey}]}>
          If you are new /
        </Text>
        <Pressable
          onPress={() => navigation.replace('signup')}
          testID="LoginIntro-signupBtn"
          accessibilityLabel="Signup"
          accessibilityHint="lets you create new user">
          <Text style={[styles.signupBtn, {color: themeColors.purple}]}>
            Create New
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

export default LoginIntro;

const styles = StyleSheet.create({
  mainTextContainer: {
    flexDirection: 'row',
  },
  loginText: {},
  nowText: {},
  mainContainer: {
    flex: 1,
  },
  signup: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  signupBtn: {
    marginLeft: 8,
  },
  signupText: {},
});
