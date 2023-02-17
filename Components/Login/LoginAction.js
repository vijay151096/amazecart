import {useNavigation} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import {AuthContext} from '../../Store/AuthContextProvider';
import {lightColor} from '../../Styles/LightColor';
import SocialSignin from './SocialSignin';
import {ThemeContext} from '../../Store/ThemeContextProvider';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

function LoginAction() {
  const {login} = useContext(AuthContext);
  const navigation = useNavigation();
  const {themeColors} = useContext(ThemeContext);

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

  //Animated Styling - Translate The Input Boxes

  const positioning = useSharedValue(-100);
  const prePositioning = useAnimatedStyle(() => {
    return {
      transform: [{translateY: positioning.value}],
    };
  });
  useEffect(() => {
    positioning.value = withTiming(positioning.value + 100, {duration: 1000});
  }, []);

  return (
    <Animated.View style={[styles.mainContainer, prePositioning]}>
      <TextInput
        placeholder="Username"
        value={enteredUsername}
        onChangeText={handleUsernameChange}
        style={[
          styles.userInput,
          {backgroundColor: themeColors.loginInputGrey},
        ]}
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
        style={[
          styles.userInput,
          {backgroundColor: themeColors.loginInputGrey},
        ]}
        accessible={true}
        accessibilityLabel={'password input section'}
        accessibilityHint={'we can enter password here'}
      />
      <View style={styles.signup}>
        <Text style={[styles.signupText, {color: themeColors.darkGrey}]}>
          Forgot Passcode? /
        </Text>
        <Pressable>
          <Text style={[styles.signupBtn, {color: themeColors.purple}]}>
            Reset
          </Text>
        </Pressable>
      </View>
      <View>
        <Pressable
          accessibilityLabel="Login Button"
          accessibilityHint="lets you login after entering the details"
          style={({pressed}) => [
            styles.actionButton,
            {backgroundColor: themeColors.purple},
            pressed && {opacity: 0.6},
          ]}
          onPress={handleLogin}>
          <Text style={[styles.buttonText, {color: themeColors.white}]}>
            Login
          </Text>
        </Pressable>
        <SocialSignin />
        <Pressable
          onPress={() => {
            navigation.navigate('Profile');
          }}>
          <Text
            style={{
              color: themeColors.purple,
              textAlign: 'center',
              marginTop: 25,
            }}>
            Login through browser
          </Text>
        </Pressable>
      </View>
    </Animated.View>
  );
}

export default LoginAction;

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
    marginVertical: 20,
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
});
