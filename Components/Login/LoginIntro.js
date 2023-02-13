import React, {useContext} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {lightColor} from '../../Styles/LightColor';
import BoldTitle from '../Core/BoldTitle';
import {useNavigation} from '@react-navigation/native';
import {ThemeContext} from '../../Store/ThemeContextProvider';

function LoginIntro() {
  const navigation = useNavigation();
  const {themeColors} = useContext(ThemeContext);
  return (
    <View style={styles.mainContainer} testID="LoginIntro-mainContainer">
      <BoldTitle>Hey,</BoldTitle>
      <View style={styles.mainTextContainer} testID="LoginIntro-loginText">
        <BoldTitle style={[styles.loginText, {color: themeColors.purple}]}>
          Login{' '}
        </BoldTitle>
        <BoldTitle style={[styles.nowText, {color: themeColors.lightBlue}]}>
          Now.
        </BoldTitle>
      </View>
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
