import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDashBoard from '../Screens/ProductDashBoard';
import ProductDetails from '../Screens/ProductDetails';
import Cart from '../Screens/Cart';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import Title from '../Components/Core/Title';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DeleteCart from '../Components/Cart/DeleteCart';
import BoldTitle from '../Components/Core/BoldTitle';
import {AuthContext} from '../Store/AuthContextProvider';
import Login from '../Screens/Login';
import Signup from '../Screens/Signup';
import Profile from '../Screens/Profile';
import LogoutIcon from '../Components/Core/LogoutIcon';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Favorites from '../Screens/Favorites';
import {ActivityIndicator, View} from 'react-native';
import GithubWebView from '../Screens/GithubWebView';
import Donate from '../Screens/Donate';
import {ThemeContext} from '../Store/ThemeContextProvider';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ShoppingIcon from '../Components/Core/ShoppingIcon';
import FavoriteIcons from '../Components/Core/FavoriteIcons';
import BottomTabNavigator from './BottomTabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const {themeColors} = useContext(ThemeContext);

  const drawerHeaderOptions = {
    headerShadowVisible: false,
    headerStyle: {backgroundColor: themeColors.greyBackground},
    sceneContainerStyle: {backgroundColor: themeColors.greyBackground},
    headerTitle: () => <Title />,
  };

  return (
    <Drawer.Navigator
      screenOptions={drawerHeaderOptions}
      initialRouteName="Products">
      <Drawer.Screen
        name="ProductsDashBoard"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Donate"
        component={Donate}
        options={drawerHeaderOptions}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
