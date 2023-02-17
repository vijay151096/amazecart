import React, {useContext} from 'react';
import ProductDashBoard from '../Screens/ProductDashBoard';
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

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const {themeColors} = useContext(ThemeContext);

  const bottomTabHeaderOptions = {
    headerShadowVisible: false,
    headerStyle: {backgroundColor: themeColors.greyBackground},
    contentStyle: {backgroundColor: themeColors.greyBackground},
    headerTitle: () => <Title />,
    tabBarShowLabel: false,
    tabBarActiveTintColor: themeColors.xColor,
  };

  return (
    <BottomTab.Navigator
      screenOptions={bottomTabHeaderOptions}
      sceneContainerStyle={{backgroundColor: themeColors.greyBackground}}
      initialRouteName="Products">
      <BottomTab.Screen
        name="Products"
        component={ProductDashBoard}
        options={{
          tabBarIcon: ({color}) => <ShoppingIcon color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({color}) => <FavoriteIcons color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
