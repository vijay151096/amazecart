import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Title from '../Components/Core/Title';
import Login from '../Screens/Login';
import Signup from '../Screens/Signup';
import Profile from '../Screens/Profile';
import GithubWebView from '../Screens/GithubWebView';
import {ThemeContext} from '../Store/ThemeContextProvider';

const AuthStack = createNativeStackNavigator();

const AuthenticationStack = () => {
  const {themeColors} = useContext(ThemeContext);

  const nativeStackHeaderOptions = {
    headerShadowVisible: false,
    headerStyle: {backgroundColor: themeColors.greyBackground},
    contentStyle: {backgroundColor: themeColors.greyBackground},
    headerTitle: () => <Title />,
  };

  return (
    <AuthStack.Navigator screenOptions={nativeStackHeaderOptions}>
      <AuthStack.Screen name="login" component={Login} />
      <AuthStack.Screen name="signup" component={Signup} />
      <AuthStack.Screen name="githubLogin" component={GithubWebView} />
      <AuthStack.Screen name="Profile" component={Profile} />
    </AuthStack.Navigator>
  );
};

export default AuthenticationStack;
