import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDashBoard from './Screens/ProductDashBoard';
import ProductDetails from './Screens/ProductDetails';
import Cart from './Screens/Cart';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import Title from './Components/Core/Title';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DeleteCart from './Components/Cart/DeleteCart';
import BoldTitle from './Components/Core/BoldTitle';
import {AuthContext} from './Store/AuthContextProvider';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Profile from './Screens/Profile';
import LogoutIcon from './Components/Core/LogoutIcon';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Favorites from './Screens/Favorites';
import {ActivityIndicator, View} from 'react-native';
import GithubWebView from './Screens/GithubWebView';
import Donate from './Screens/Donate';
import {ThemeContext} from './Store/ThemeContextProvider';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ShoppingIcon from './Components/Core/ShoppingIcon';
import FavoriteIcons from './Components/Core/FavoriteIcons';

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const BottomTab = createBottomTabNavigator();

function Navigation() {
  const {themeColors, isDarkMode} = useContext(ThemeContext);
  const {isAuthenticated, isGettingTokenFromStorage} = useContext(AuthContext);
  const drawerHeaderOptions = {
    headerShadowVisible: false,
    headerStyle: {backgroundColor: themeColors.greyBackground},
    sceneContainerStyle: {backgroundColor: themeColors.greyBackground},
    headerTitle: () => <Title />,
  };

  const bottomTabHeaderOptions = {
    headerShadowVisible: false,
    headerStyle: {backgroundColor: themeColors.greyBackground},
    contentStyle: {backgroundColor: themeColors.greyBackground},
    headerTitle: () => <Title />,
    tabBarShowLabel: false,
    tabBarActiveTintColor: themeColors.xColor,
  };

  const nativeStackHeaderOptions = {
    headerShadowVisible: false,
    headerStyle: {backgroundColor: themeColors.greyBackground},
    contentStyle: {backgroundColor: themeColors.greyBackground},
    headerTitle: () => <Title />,
  };

  const ProductStack = () => {
    const BottomTabNavigator = () => (
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
    const DrawerNavigator = () => (
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

  if (isGettingTokenFromStorage) {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <ActivityIndicator />
      </View>
    );
  }

  const AuthenticationStack = () => {
    return (
      <Stack.Navigator screenOptions={nativeStackHeaderOptions}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="githubLogin" component={GithubWebView} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
      {isAuthenticated ? <ProductStack /> : <AuthenticationStack />}
    </NavigationContainer>
  );
}

export default Navigation;
