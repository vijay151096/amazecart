import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDashBoard from './Screens/ProductDashBoard';
import ProductDetails from './Screens/ProductDetails';
import Cart from './Screens/Cart';
import {NavigationContainer} from '@react-navigation/native';
import Title from './Components/Core/Title';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {color} from './Styles/Color';
import DeleteCart from './Components/Cart/DeleteCart';
import BoldTitle from './Components/Core/BoldTitle';
import {AuthContext} from './Store/AuthContextProvider';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import ProfileIcon from './Components/Core/ProfileIcon';
import Profile from './Screens/Profile';
import LogoutIcon from './Components/Core/LogoutIcon';

const Stack = createNativeStackNavigator();

function Navigation() {
  const {isAuthenticated} = useContext(AuthContext);
  const headerOptions = {
    headerShadowVisible: false,
    headerStyle: {backgroundColor: color.greyBackground},
    contentStyle: {backgroundColor: color.greyBackground},
    headerTitle: () => <Title />,
  };

  const ProductStack = () => {
    return (
      <Stack.Navigator screenOptions={headerOptions}>
        <Stack.Screen
          name="productDashboard"
          component={ProductDashBoard}
          options={{
            headerLeft: () => (
              <MaterialCommunityIcons name={'dots-grid'} size={30} />
            ),
            headerRight: () => <LogoutIcon />,
          }}
        />
        <Stack.Screen
          name="productDetails"
          component={ProductDetails}
          options={{
            headerStyle: {backgroundColor: color.white},
            contentStyle: {backgroundColor: color.white},
          }}
        />
        <Stack.Screen
          name="cart"
          component={Cart}
          options={{
            headerStyle: {backgroundColor: color.white},
            contentStyle: {backgroundColor: color.white},
            headerTitle: () => <BoldTitle>My Cart</BoldTitle>,
            headerRight: () => <DeleteCart />,
          }}
        />
        <Stack.Screen name="profile" component={Profile} />
      </Stack.Navigator>
    );
  };

  const AuthenticationStack = () => {
    return (
      <Stack.Navigator screenOptions={headerOptions}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signup" component={Signup} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      {isAuthenticated ? <ProductStack /> : <AuthenticationStack />}
    </NavigationContainer>
  );
}

export default Navigation;
