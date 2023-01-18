import React from 'react';
import {StyleSheet, View} from "react-native";
import {color} from "../../Styles/Color";

const ColorTile = ({outerColor, innerColor}) => {
    return (
        <View style={[styles.outeCircle, {backgroundColor: outerColor}]}>
            <View style={[styles.colorPicker,{backgroundColor: innerColor}]}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    outerContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    outeCircle: {
        padding:1,
        borderRadius: 20,
        marginHorizontal: 5
    },
    colorPicker: {
        padding: 12,
        borderRadius: 15,
        margin:7,
    },
    sizeText: {
        color: color.lightGrey,
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
        marginRight: 10,
    },
});

export default ColorTile;