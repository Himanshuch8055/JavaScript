import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImagesFile = () => {
  return (
    <View style={style.listStyle}>
      <Text style={style.textStyle}>This is Image File</Text>
      <Image
        style={style.imagestyle}
        source={require("../../assets/wp8778419-programmer-4k-wallpapers.png")}
      />
      <Image
        style={style.imagestyle}
        source={require("../../assets/adaptive-icon.png")}
      />
      <Image
        style={style.imagestyle}
        source={require("../../assets/favicon.png")}
      />
      <Image
        style={style.imagestyle}
        source={require("../../assets/icon.png")}
      />
      <Image
        style={style.imagestyle}
        source={require("../../assets/splash.png")}
      />
    </View>
  );
};

const style = StyleSheet.create({
  listStyle: {
    height: 500,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 30,
  },
  imagestyle: {
    width: 200,
    height: 200,
  },
});

export default ImagesFile;
