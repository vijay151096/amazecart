import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDashBoard from './Screens/ProductDashBoard';
import ProductDetails from './Screens/ProductDetails';
import Cart from './Screens/Cart';
import {NavigationContainer} from '@react-navigation/native';
import Title from './Components/Core/Title';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import {color} from './Styles/Color';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShadowVisible: false,
          headerStyle: {backgroundColor: color.greyBackground},
          contentStyle: {backgroundColor: color.greyBackground},
          headerTitle: () => <Title />,
        }}>
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
        <Stack.Screen name="cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;
