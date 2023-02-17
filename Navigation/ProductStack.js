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
import DrawerNavigator from './DrawerNavigator';

const Stack = createNativeStackNavigator();

const ProductStack = () => {
  const {themeColors} = useContext(ThemeContext);

  const nativeStackHeaderOptions = {
    headerShadowVisible: false,
    headerStyle: {backgroundColor: themeColors.greyBackground},
    contentStyle: {backgroundColor: themeColors.greyBackground},
    headerTitle: () => <Title />,
  };

  return (
    <Stack.Navigator screenOptions={nativeStackHeaderOptions}>
      <Stack.Screen
        name="drawerStack"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="productDetails"
        component={ProductDetails}
        options={{
          headerStyle: {backgroundColor: themeColors.white},
          contentStyle: {backgroundColor: themeColors.white},
        }}
      />
      <Stack.Screen
        name="cart"
        component={Cart}
        options={{
          headerStyle: {backgroundColor: themeColors.white},
          contentStyle: {backgroundColor: themeColors.white},
          headerTitle: () => <BoldTitle>My Cart</BoldTitle>,
          headerRight: () => <DeleteCart />,
        }}
      />
      <Stack.Screen name="profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default ProductStack;
