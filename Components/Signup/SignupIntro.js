import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {lightColor} from '../../Styles/LightColor';
import BoldTitle from '../Core/BoldTitle';
import {ThemeContext} from '../../Store/ThemeContextProvider';

function SignupIntro() {
  const {themeColors} = useContext(ThemeContext);
  return (
    <View style={styles.mainContainer}>
      <BoldTitle>Hey,</BoldTitle>
      <View style={styles.mainTextContainer}>
        <BoldTitle style={{color: themeColors.purple}}>Signup </BoldTitle>
        <BoldTitle style={{color: themeColors.lightBlue}}>Now.</BoldTitle>
      </View>
    </View>
  );
}

export default SignupIntro;

const styles = StyleSheet.create({
  mainTextContainer: {
    flexDirection: 'row',
  },
  mainContainer: {
    flex: 1,
    marginTop: 20,
  },
  signup: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  signupBtn: {
    marginLeft: 8,
  },
});
