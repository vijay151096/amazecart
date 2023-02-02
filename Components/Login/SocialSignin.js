import React, {useContext} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {color} from '../../Styles/Color';

import {AuthContext} from '../../Store/AuthContextProvider';
import {useNavigation} from '@react-navigation/native';

function SocialSignin() {
  const {googleSignIn} = useContext(AuthContext);
  const navigation = useNavigation();

  const githubNavigate = () => {
    navigation.replace('githubLogin');
  };

  return (
    <View style={styles.socialSigninContainer}>
      <Text style={styles.textStyle}>Or Sign In With: </Text>
      <View style={styles.iconContainer}>
        <Pressable onPress={googleSignIn}>
          <View>
            <Image
              style={styles.imageStyle}
              source={require('../../assets/images/googleIcon.png')}
            />
          </View>
        </Pressable>
        <Pressable onPress={githubNavigate}>
          <View>
            <Image
              style={styles.imageStyle}
              source={require('../../assets/images/githubIcon.png')}
            />
          </View>
        </Pressable>
        <View>
          <Image
            style={styles.imageStyle}
            source={require('../../assets/images/twitterIcon.png')}
          />
        </View>
        <View>
          <Image
            style={styles.imageStyle}
            source={require('../../assets/images/fbIcon.png')}
          />
        </View>
      </View>
    </View>
  );
}

export default SocialSignin;

const styles = StyleSheet.create({
  socialSigninContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle: {marginRight: 10, color: color.darkGrey},
  imageStyle: {height: 32, width: 32},
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 40,
  },
});
