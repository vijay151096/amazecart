import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {AuthContext} from '../Store/AuthContextProvider';

function Login() {
  const {login} = useContext(AuthContext);

  return (
    <View>
      <Button
        title="Login"
        onPress={() => {
          login('something', 'something');
        }}
      />
    </View>
  );
}

export default Login;
