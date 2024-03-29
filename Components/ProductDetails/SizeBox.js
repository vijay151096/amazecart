import React, {useContext, useEffect, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import useTheme from '../../Store/Hooks/useTheme';

const SizeBox = ({boxNo, setSelectBox, selectBox, children}) => {
  const [isSelected, setIsSelected] = useState(false);
  const {themeColors} = useTheme();
  const handlePress = () => {
    setSelectBox(boxNo);
  };

  useEffect(() => {
    if (selectBox === boxNo) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [selectBox]);

  const finalStyle = isSelected
    ? [
        styles.sizeBoxOuter,
        styles.selectedBoxColor,
        {backgroundColor: themeColors.lightBlue},
      ]
    : [styles.sizeBoxOuter];

  return (
    <Pressable style={finalStyle} onPress={handlePress}>
      <View>
        <Text style={[styles.sizeBox]}>{children}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  selectedBoxColor: {},
  sizeBoxOuter: {
    paddingHorizontal: 3,
    paddingVertical: 8,
    margin: 5,
    borderRadius: 8,
    overflow: 'hidden',
  },
  sizeBox: {
    marginHorizontal: 14,
  },
});

export default SizeBox;
