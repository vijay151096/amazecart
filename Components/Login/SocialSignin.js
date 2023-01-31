import React, { useContext } from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

import { AuthContext } from '../../Store/AuthContextProvider';

function SocialSignin() {
  const {googleSignIn} = useContext(AuthContext);

  return (
    <Pressable onPress={googleSignIn}>
      <Text>Sign In</Text>
    </Pressable>
  );
}

export default SocialSignin;

const styles = StyleSheet.create({});
