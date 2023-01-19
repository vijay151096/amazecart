import React from 'react';
import {View, StyleSheet} from 'react-native';
import SemiCircle from '../Components/Core/SemiCircle';
import LoginIntro from '../Components/Login/LoginIntro';
import LoginAction from '../Components/Login/LoginAction';

function Login() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <SemiCircle />
      </View>
      <View style={styles.textContainer}>
        <LoginIntro />
      </View>
      <View style={styles.loginContainer}>
        <LoginAction />
      </View>
    </View>
  );
}

export default Login;

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
    flex: 3,
  },
});
