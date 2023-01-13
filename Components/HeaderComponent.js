import React from "react";
import { StyleSheet, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";
import Entypo from "react-native-vector-icons/Entypo";

const HeaderComponent = () => {
  return (
    <View style={styles.outerContainer}>
      <MaterialCommunityIcons name={"dots-grid"} size={30} />
      <View style={styles.innerContainer}>
        <Entypo name={"shop"} size={30} color={"blue"}/>
      </View>
      <Octicons name={"search"} size={30} />
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: "row",
    padding: 10,
    margin: 10,
  },
  innerContainer: {
    flex: 1,
    alignItems: "center",
  },
});
export default HeaderComponent;
