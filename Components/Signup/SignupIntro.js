import React from 'react';
import {StyleSheet, View} from 'react-native';
import {lightColor} from '../../Styles/LightColor';
import BoldTitle from '../Core/BoldTitle';

function SignupIntro() {
  return (
    <View style={styles.mainContainer}>
      <BoldTitle>Hey,</BoldTitle>
      <View style={styles.mainTextContainer}>
        <BoldTitle style={styles.loginText}>Signup </BoldTitle>
        <BoldTitle style={styles.nowText}>Now.</BoldTitle>
      </View>
    </View>
  );
}

export default SignupIntro;

const styles = StyleSheet.create({
  mainTextContainer: {
    flexDirection: 'row',
  },
  loginText: {
    color: lightColor.purple,
  },
  nowText: {
    color: lightColor.lightBlue,
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
  signupText: {
    color: lightColor.darkGrey,
  },
});
