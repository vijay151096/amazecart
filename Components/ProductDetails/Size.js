import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SizeBox from './SizeBox';
import useTheme from '../../Store/Hooks/useTheme';

function Size() {
  const [selectBox, setSelectBox] = useState(null);
  const {themeColors} = useTheme();
  return (
    <View style={styles.outerContainer} testID="Size-mainContainer">
      <Text
        style={[styles.text, styles.sizeText, {color: themeColors.lightGrey}]}>
        Size :{' '}
      </Text>
      <SizeBox boxNo={6} setSelectBox={setSelectBox} selectBox={selectBox}>
        US 6
      </SizeBox>
      <SizeBox boxNo={7} setSelectBox={setSelectBox} selectBox={selectBox}>
        US 7
      </SizeBox>
      <SizeBox boxNo={8} setSelectBox={setSelectBox} selectBox={selectBox}>
        US 8
      </SizeBox>
      <SizeBox boxNo={9} setSelectBox={setSelectBox} selectBox={selectBox}>
        US 9
      </SizeBox>
    </View>
  );
}
const styles = StyleSheet.create({
  outerContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sizeText: {},
  sizeBoxOuter: {
    paddingHorizontal: 3,
    paddingVertical: 8,
    margin: 5,
    borderRadius: 8,
    overflow: 'hidden',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sizeBox: {
    marginHorizontal: 14,
  },
});

export default Size;
