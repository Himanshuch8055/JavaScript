import React from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";

const OurButton = () => {
  return (
    <View>
      <Text style={style.textStyle}>OurButton</Text>
      <Button
        title="Click Here"
        onPress={() => {
          //   console.log("Hello");
          Alert.alert("This is alert");
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  textStyle: {
    marginVertical: 100,
    textAlign: "center",
    fontSize: 30,
  },
});

export default OurButton;
