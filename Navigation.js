import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDashBoard from './Screens/ProductDashBoard';
import ProductDetails from './Screens/ProductDetails';
import Cart from './Screens/Cart';
import {NavigationContainer} from '@react-navigation/native';
import Title from './Components/Core/Title';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import {color} from './Styles/Color';
import DeleteCart from './Components/Cart/DeleteCart';
import {CartContext} from './Store/CartContextProvider';
import CartTitle from './Components/Cart/CartTitle';
import {AuthContext} from './Store/AuthContextProvider';
import Login from './Screens/Login';
import Signup from './Screens/Signup';

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
            headerRight: () => <Octicons name={'search'} size={30} />,
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
            headerTitle: () => <CartTitle>My Cart</CartTitle>,
            headerRight: () => <DeleteCart />,
          }}
        />
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
