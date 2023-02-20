import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetails from '../Screens/ProductDetails';
import Cart from '../Screens/Cart';
import Title from '../Components/Core/Title';
import DeleteCart from '../Components/Cart/DeleteCart';
import BoldTitle from '../Components/Core/BoldTitle';
import Profile from '../Screens/Profile';
import DrawerNavigator from './DrawerNavigator';
import useTheme from '../Store/Hooks/useTheme';

const Stack = createNativeStackNavigator();

const ProductStack = () => {
  const {themeColors} = useTheme();

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
