import React, {useState} from 'react';
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
import {lightColor} from '../Styles/LightColor';

function Donate() {
  const {CounterModule} = NativeModules;

  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState(0);
  const handleDonate = () => {
    CounterModule.donate(+balance, +amount, result => {
      setBalance(result);
      Alert.alert('Donated !', 'Happy that you were a part of this initiative');
    });
  };
  return (
    <View style={styles.outer}>
      <View style={styles.donateBox}>
        <Text style={styles.heading}>Donation</Text>
        <Text style={styles.balanceText}>{balance}</Text>
      </View>
      <View style={styles.input}>
        <TextInput
          style={styles.inputField}
          value={amount}
          onChangeText={setAmount}
          keyboardType={'numeric'}
          inputmode={'numeric'}
        />
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={handleDonate}
        style={styles.button}>
        <View>
          <Text style={styles.donateText}>Donate</Text>
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
    backgroundColor: lightColor.loginInputGrey,
  },
  donateText: {
    color: lightColor.white,
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
    color: lightColor.lightBlue,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: lightColor.purple,
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
    color: lightColor.purple,
    textAlign: 'center',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 35,
    color: lightColor.purple,
    marginBottom: 40,
  },
});

export default Donate;
