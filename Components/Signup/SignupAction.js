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
import {color} from '../../Styles/Color';
import {useNavigation} from '@react-navigation/native';

function SignupAction() {
  const {login} = useContext(AuthContext);

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
        style={styles.userInput}
      />
      <TextInput
        placeholder="Username"
        value={enteredUsername}
        onChangeText={handleUsernameChange}
        style={styles.userInput}
        autoCorrect={false}
      />
      <TextInput
        autoCorrect={false}
        placeholder="Password"
        secureTextEntry
        value={enteredPassword}
        onChangeText={handlePasswordChange}
        style={styles.userInput}
      />

      <View style={[styles.signup, {marginTop: 20}]}>
        <Text style={styles.signupText}> By Signing up, you agree to the</Text>
        <Pressable>
          <Text style={styles.signupBtn}>Terms & Conditions </Text>
        </Pressable>
      </View>
      <View style={styles.signup}>
        <Text style={styles.signupText}> and</Text>
        <Pressable>
          <Text style={styles.signupBtn}>Privacy and Policy</Text>
        </Pressable>
      </View>
      <View style={{marginVertical: 25}}>
        <Pressable
          style={({pressed}) => [
            styles.actionButton,
            pressed && {opacity: 0.6},
          ]}
          onPress={handleSignup}>
          <Text style={styles.buttonText}>Signup</Text>
        </Pressable>
        <View style={[styles.signup, {justifyContent: 'center'}]}>
          <Text style={styles.finalText}>Joined us before ?</Text>
          <Pressable onPress={() => navigation.navigate('login')}>
            <Text style={{color: color.purple, textAlign: 'center'}}>
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
  },
  finalText: {
    color: color.darkGrey,
    textAlign: 'center',
    marginRight: 5,
  },
});
