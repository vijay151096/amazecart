import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
  Alert,
  SafeAreaView,
} from 'react-native';
import {AuthContext} from '../../Store/AuthContextProvider';
import {lightColor} from '../../Styles/LightColor';
import {useNavigation} from '@react-navigation/native';
import {ThemeContext} from '../../Store/ThemeContextProvider';

function SignupAction() {
  const {login} = useContext(AuthContext);
  const {themeColors} = useContext(ThemeContext);
  const [enteredUsername, setEnteredUsername] = useState('kminchelle');
  const [enteredPassword, setEnteredPassword] = useState('0lelplR');
  const [enteredName, setEnteredName] = useState('Peter Parker');

  const handleUsernameChange = newUsername => {
    setEnteredUsername(newUsername);
  };
  const handlePasswordChange = newPassword => {
    setEnteredPassword(newPassword);
  };
  const handleNameChange = newName => {
    setEnteredName(newName);
  };

  const navigation = useNavigation();
  const handleSignup = () => {
    try {
      login(enteredUsername, enteredPassword);
    } catch (error) {
      Alert.alert('Signup Failed!', 'Could not log you in. Please try again');
    }
  };

  return (
    <View style={styles.mainContainer}>
      <TextInput
        autoCorrect={false}
        placeholder="Name"
        value={enteredName}
        onChangeText={handleNameChange}
        style={[
          styles.userInput,
          {backgroundColor: themeColors.loginInputGrey},
        ]}
      />
      <TextInput
        placeholder="Username"
        value={enteredUsername}
        onChangeText={handleUsernameChange}
        style={[
          styles.userInput,
          {backgroundColor: themeColors.loginInputGrey},
        ]}
        autoCorrect={false}
      />
      <TextInput
        autoCorrect={false}
        placeholder="Password"
        secureTextEntry
        value={enteredPassword}
        onChangeText={handlePasswordChange}
        style={[
          styles.userInput,
          {backgroundColor: themeColors.loginInputGrey},
        ]}
      />

      <View style={[styles.signup, {marginTop: 20}]}>
        <Text style={[styles.signupText, {color: themeColors.darkGrey}]}>
          {' '}
          By Signing up, you agree to the
        </Text>
        <Pressable>
          <Text style={[styles.signupBtn, {color: themeColors.purple}]}>
            Terms & Conditions{' '}
          </Text>
        </Pressable>
      </View>
      <View style={styles.signup}>
        <Text style={[styles.signupText, {color: themeColors.darkGrey}]}>
          {' '}
          and
        </Text>
        <Pressable>
          <Text style={[styles.signupBtn, {color: themeColors.purple}]}>
            Privacy and Policy
          </Text>
        </Pressable>
      </View>
      <View style={{marginVertical: 25}}>
        <Pressable
          style={({pressed}) => [
            styles.actionButton,
            {backgroundColor: themeColors.purple},
            pressed && {opacity: 0.6},
          ]}
          onPress={handleSignup}>
          <Text style={[styles.buttonText, {color: themeColors.white}]}>
            Signup
          </Text>
        </Pressable>
        <View style={[styles.signup, {justifyContent: 'center'}]}>
          <Text style={[styles.finalText, {color: themeColors.darkGrey}]}>
            Joined us before ?
          </Text>
          <Pressable onPress={() => navigation.replace('login')}>
            <Text style={{color: themeColors.purple, textAlign: 'center'}}>
              Login
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default SignupAction;

const styles = StyleSheet.create({
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
  },

  actionButton: {
    padding: 20,
    marginVertical: 25,
    borderRadius: 7,
  },
  mainContainer: {
    flex: 1,
  },
  signup: {
    flexDirection: 'row',
  },
  signupBtn: {
    marginLeft: 8,
  },
  signupText: {},
  userInput: {
    padding: 20,
    marginVertical: 10,
    borderRadius: 7,
  },
  finalText: {
    textAlign: 'center',
    marginRight: 5,
  },
});
