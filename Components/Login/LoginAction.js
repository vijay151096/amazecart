import {useNavigation} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import {AuthContext} from '../../Store/AuthContextProvider';
import {color} from '../../Styles/Color';
import SocialSignin from './SocialSignin';

function LoginAction() {
  const {login} = useContext(AuthContext);
  const navigation = useNavigation();

  const [enteredUsername, setEnteredUsername] = useState('kminchelle');
  const [enteredPassword, setEnteredPassword] = useState('0lelplR');

  const handleUsernameChange = newUsername => {
    setEnteredUsername(newUsername);
  };
  const handlePasswordChange = newPassword => {
    setEnteredPassword(newPassword);
  };

  const handleLogin = () => {
    try {
      login(enteredUsername, enteredPassword);
    } catch (error) {
      Alert.alert('Login Failed!', 'Could not log you in. Please try again');
    }
  };

  return (
    <View style={styles.mainContainer}>
      <TextInput
        placeholder="Username"
        value={enteredUsername}
        onChangeText={handleUsernameChange}
        style={styles.userInput}
        autoCorrect={false}
        accessible={true}
        accessibilityLabel={'username input section'}
        accessibilityHint={'we can enter username here'}
      />
      <TextInput
        autoCorrect={false}
        placeholder="Password"
        secureTextEntry
        value={enteredPassword}
        onChangeText={handlePasswordChange}
        style={styles.userInput}
        accessible={true}
        accessibilityLabel={'password input section'}
        accessibilityHint={'we can enter password here'}
      />
      <View style={styles.signup}>
        <Text style={styles.signupText}>Forgot Passcode? /</Text>
        <Pressable>
          <Text style={styles.signupBtn}>Reset</Text>
        </Pressable>
      </View>
      <View>
        <Pressable
          accessibilityLabel="Login Button"
          accessibilityHint="lets you login after entering the details"
          style={({pressed}) => [
            styles.actionButton,
            pressed && {opacity: 0.6},
          ]}
          onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
        <SocialSignin />
        <Pressable
          onPress={() => {
            navigation.navigate('Profile');
          }}>
          <Text
            style={{color: color.purple, textAlign: 'center', marginTop: 25}}>
            Login through browser
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

export default LoginAction;

const styles = StyleSheet.create({
  buttonText: {
    color: color.white,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
  },

  actionButton: {
    padding: 20,
    marginVertical: 25,
    borderRadius: 7,
    backgroundColor: color.purple,
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
    color: color.purple,
  },
  signupText: {
    color: color.darkGrey,
  },
  userInput: {
    padding: 20,
    marginVertical: 10,
    borderRadius: 7,
    backgroundColor: color.loginInputGrey,
    //    color: color.darkGrey,
  },
});
