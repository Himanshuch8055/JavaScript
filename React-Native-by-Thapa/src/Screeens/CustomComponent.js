import React from "react";
import { Text, StyleSheet } from "react-native";

const CustomComponent = () => {
  return <Text style={style.textStyle}>This is My Custome Components</Text>;
};

const style = StyleSheet.create({
  textStyle: {
    color: "red",
  },
});

export default CustomComponent;
