import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import BookCount from "./src/Components/BookCount";

// const App = () => {
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      totalCount: 0,
      readingCount: 0,
      readCount: 0,
    };
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView />
        <View
          style={{
            height: 70,
            borderBottomWidth: 0.5,
            borderBottomColor: "#000000",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 24 }}>Book Worm</Text>
        </View>
        <View style={{ flex: 1 }} />
        <View
          style={{
            height: 70,
            borderTopWidth: 0.5,
            borderTopColor: "#000000",
            flexDirection: "row",
          }}
        >
          <BookCount title="Total" count={this.state.totalCount} />
          <BookCount title="Reading" count={this.state.readingCount} />
          <BookCount title="Read" count={this.state.readCount} />
        </View>
        <SafeAreaView />
      </View>
    );
  }
}

export default App;
