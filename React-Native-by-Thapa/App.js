import React from "react";
import { Text, StyleSheet, View } from "react-native";
// import CustomComponent from "./src/Screeens/CustomComponent";
// import FirstChallenge from "./src/Screeens/FirstChallenge";
// import FlatListDemo from "./src/Screeens/FlatListDemo";
// import ImagesFile from "./src/Screeens/Images";
import OurButton from "./src/Screeens/OurButton";

const App = () => {
  return (
    <View>
      {/* <Text style={style.textStyle}>Hello world</Text> */}
      {/* <CustomComponent /> */}
      {/* <FirstChallenge /> */}
      {/* <FlatListDemo /> */}
      {/* <ImagesFile /> */}
      <OurButton />
    </View>
  );
};

const style = StyleSheet.create({
  textStyle: {
    color: "red",
  },
});

export default App;
