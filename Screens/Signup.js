import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import SemiCircle from '../Components/Core/SemiCircle';
import SignupIntro from '../Components/Signup/SignupIntro';
import SignupAction from '../Components/Signup/SignupAction';

function Signup() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <SemiCircle />
      </View>
      <View style={styles.textContainer}>
        <SignupIntro />
      </View>
      <View style={styles.loginContainer}>
        <SignupAction />
      </View>
    </View>
  );
}

export default Signup;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    margin: 40,
  },
  imageContainer: {
    flex: 1,
    overflow: 'hidden',
  },
  textContainer: {
    flex: 1,
  },
  loginContainer: {
    flex: 5,
  },
});
