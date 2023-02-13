import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {lightColor} from '../../Styles/LightColor';
import BoldTitle from '../Core/BoldTitle';
import {useNavigation} from '@react-navigation/native';

function LoginIntro() {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer} testID="LoginIntro-mainContainer">
      <BoldTitle>Hey,</BoldTitle>
      <View style={styles.mainTextContainer} testID="LoginIntro-loginText">
        <BoldTitle style={styles.loginText}>Login </BoldTitle>
        <BoldTitle style={styles.nowText}>Now.</BoldTitle>
      </View>
      <View style={styles.signup}>
        <Text style={styles.signupText}>If you are new /</Text>
        <Pressable
          onPress={() => navigation.replace('signup')}
          testID="LoginIntro-signupBtn"
          accessibilityLabel="Signup"
          accessibilityHint="lets you create new user">
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
    color: lightColor.purple,
  },
  nowText: {
    color: lightColor.lightBlue,
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
    color: lightColor.purple,
  },
  signupText: {
    color: lightColor.darkGrey,
  },
});
