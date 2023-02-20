import React, {useContext} from 'react';
import Title from '../Components/Core/Title';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Donate from '../Screens/Donate';
import BottomTabNavigator from './BottomTabNavigator';
import useTheme from '../Store/Hooks/useTheme';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const {themeColors} = useTheme();

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
