import React, {useContext} from 'react';
import {View, Text, Pressable, StyleSheet, TextInput} from 'react-native';
import {AuthContext} from '../../Store/AuthContextProvider';
import {color} from '../../Styles/Color';

function LoginAction() {
  const {login} = useContext(AuthContext);

  const handleLogin = () => {
    login('something', 'something');
  };

  return (
    <View style={styles.mainContainer}>
      <TextInput placeholder="Username" style={styles.userInput} />
      <TextInput placeholder="Password" style={styles.userInput} />
      <View style={styles.signup}>
        <Text style={styles.signupText}>Forgot Passcode? /</Text>
        <Pressable>
          <Text style={styles.signupBtn}>Reset</Text>
        </Pressable>
      </View>
      <View style={{marginVertical: 25}}>
        <Pressable
          style={({pressed}) => [
            styles.actionButton,
            pressed && {opacity: 0.6},
          ]}
          onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
        <Pressable>
          <Text style={{color: color.darkGrey, textAlign: 'center'}}>
            Skip Now
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
