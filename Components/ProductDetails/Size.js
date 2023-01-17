import React, {useState} from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { color } from "../../Styles/Color";
import SizeBox from "./SizeBox";

function Size() {

    const [selectBox, setSelectBox] = useState(null);



    return (
        <View style={styles.outerContainer}>
            <Text style={[styles.text, styles.sizeText]}>Size : </Text>
            <SizeBox boxNo={6} setSelectBox={setSelectBox} selectBox={selectBox}>US 6</SizeBox>
            <SizeBox boxNo={7} setSelectBox={setSelectBox} selectBox={selectBox}>US 7</SizeBox>
            <SizeBox boxNo={8} setSelectBox={setSelectBox} selectBox={selectBox}>US 8</SizeBox>
            <SizeBox boxNo={9} setSelectBox={setSelectBox} selectBox={selectBox}>US 9</SizeBox>
        </View>
    );
}
const styles = StyleSheet.create({
    outerContainer: {
        marginVertical: 10,
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

export default Size;
