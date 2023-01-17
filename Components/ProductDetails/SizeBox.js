import React, {useEffect, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from "react-native";
import {color} from "../../Styles/Color";

const SizeBox = ({boxNo, setSelectBox, selectBox, children}) => {

    const [isSelected, setIsSelected] = useState(false);

    const handlePress = () => {
        setSelectBox(boxNo);
    }

    // const selectedStyle = [styles.sizeBoxOuter, styles.selectedBoxColor];
    // const unselectedStyle = [styles.sizeBoxOuter];
    // let finalStyle = []
    // const handleStyles = () => {
    //     if (selectBox == boxNo) {
    //         finalStyle = selectedStyle;
    //     } else {
    //         finalStyle = unselectedStyle;
    //     }
    // }

    useEffect(() => {
        if (selectBox === boxNo) {
            setIsSelected(true)
        } else {
            setIsSelected(false)
        }
    }, [selectBox]);

    const finalStyle = isSelected ? [styles.sizeBoxOuter, styles.selectedBoxColor] : [styles.sizeBoxOuter];

    return (
        <Pressable style={finalStyle} onPress={handlePress}>
            <View>
                <Text style={[styles.sizeBox]}>{children}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    outerContainer: {
        marginVertical: 20,
        flexDirection: "row",
        alignItems: "center",
    },
    selectedBoxColor: {
        backgroundColor: color.lightBlue,
    },
    sizeText: {
        color: color.lightGrey,
    },
    sizeBoxOuter: {
        paddingHorizontal: 3,
        paddingVertical: 8,
        margin: 5,
        borderRadius: 8,
        overflow: "hidden",
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
    },
    sizeBox: {
        marginHorizontal: 14,
    },
});

export default SizeBox;
