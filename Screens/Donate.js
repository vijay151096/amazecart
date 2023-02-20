import React, {useContext, useState, useEffect} from 'react';
import {
  Alert,
  Button,
  NativeModules,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import useTheme from '../Store/Hooks/useTheme';

function Donate() {
  const {CounterModule} = NativeModules;
  const {themeColors} = useTheme();
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState(0);
  const handleDonate = () => {
    CounterModule.donate(+balance, +amount, result => {
      setBalance(result);
      Alert.alert('Donated !', 'Happy that you were a part of this initiative');
    });
  };
  const navigation = useNavigation();
  const handleDrawerState = () => {
    navigation.openDrawer();
  };

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MaterialCommunityIcons
          name={'dots-grid'}
          size={30}
          style={{marginLeft: 10}}
          onPress={handleDrawerState}
        />
      ),
    });
  }, []);

  return (
    <View style={[styles.outer, {backgroundColor: themeColors.loginInputGrey}]}>
      <View style={styles.donateBox}>
        <Text style={[styles.heading, {color: themeColors.purple}]}>
          Donation
        </Text>
        <Text style={[styles.balanceText, {color: themeColors.lightBlue}]}>
          {balance}
        </Text>
      </View>
      <View style={styles.input}>
        <TextInput
          style={[styles.inputField, {color: themeColors.purple}]}
          value={amount}
          onChangeText={setAmount}
          keyboardType={'numeric'}
          inputmode={'numeric'}
        />
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={handleDonate}
        style={[styles.button, {backgroundColor: themeColors.purple}]}>
        <View>
          <Text style={[styles.donateText, {color: themeColors.white}]}>
            Donate
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 35,
    borderRadius: 25,
    overflow: 'hidden',
  },
  donateText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  donateBox: {
    marginTop: 50,
  },
  balance: {
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 25,
  },
  balanceText: {
    fontWeight: 'bold',
    fontSize: 65,

    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginBottom: 150,
  },
  inputField: {
    borderBottomWidth: 0.7,
    minWidth: '30%',
    fontSize: 40,

    textAlign: 'center',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 35,

    marginBottom: 40,
  },
});

export default Donate;
