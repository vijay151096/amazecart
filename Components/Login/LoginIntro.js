import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {color} from '../../Styles/Color';
import CartTitle from '../Cart/CartTitle';

function LoginIntro() {
  return (
    <View style={styles.mainContainer}>
      <CartTitle>Hey,</CartTitle>
      <View style={styles.mainTextContainer}>
        <CartTitle style={styles.loginText}>Login </CartTitle>
        <CartTitle style={styles.nowText}>Now.</CartTitle>
      </View>
      <View style={styles.signup}>
        <Text style={styles.signupText}>If you are new /</Text>
        <Pressable>
          <Text style={styles.signupBtn}>Create New</Text>
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
  loginText: {
    color: color.purple,
  },
  nowText: {
    color: color.lightBlue,
  },
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
  signupText: {
    color: color.darkGrey,
  },
});
