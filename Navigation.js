import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDashBoard from './Screens/ProductDashBoard';
import ProductDetails from './Screens/ProductDetails';
import Cart from './Screens/Cart';
import {NavigationContainer} from '@react-navigation/native';
import Title from './Components/Core/Title';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShadowVisible: false,
          headerStyle: {backgroundColor: '#F4F6F6'},
          contentStyle: {backgroundColor: '#F4F6F6'},
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
        <Stack.Screen name="productDetails" component={ProductDetails} />
        <Stack.Screen name="cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;
