import React, {useContext} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {AuthContext} from '../Store/AuthContextProvider';
import {color} from '../Styles/Color';
import SemiCircle from '../Components/Login/SemiCircle';
import LoginIntro from '../Components/Login/LoginIntro';
import CartTitle from '../Components/Cart/CartTitle';
import LoginAction from '../Components/Login/LoginAction';

function Login() {
  const {login} = useContext(AuthContext);

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
