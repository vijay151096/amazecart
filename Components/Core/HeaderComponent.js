import React, {useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import {ThemeContext} from '../../Store/ThemeContextProvider';

const HeaderComponent = () => {
  const {themeColors} = useContext(ThemeContext);
  return (
    <View style={styles.outerContainer}>
      <MaterialCommunityIcons name={'dots-grid'} size={30} />
      <View style={styles.innerContainer}>
        <Text style={[styles.heading, {color: themeColors.xColor}]}>X</Text>
        <Text style={[styles.heading, {color: themeColors.eColor}]}>E</Text>
      </View>
      <Octicons name={'search'} size={30} />
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: 'row',
    padding: 10,
    margin: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'Georgia',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default HeaderComponent;
