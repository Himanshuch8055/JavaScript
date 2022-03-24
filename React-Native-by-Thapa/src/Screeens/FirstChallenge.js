import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FirstChallenge = () => {
  const Myname = "Himanshu chauhan";
  return (
    <View>
      <Text style={style.textStyleOne}>Welcome To My FirstChallenge</Text>
      <Text style={style.textStyleTwo}>I Love Coding</Text>
      <Text>This is {Myname}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  textStyleOne: {
    fontSize: 40,
    color: "red",
    fontWeight: "bold",
  },
  textStyleTwo: {
    fontSize: 30,
  },
});

export default FirstChallenge;
