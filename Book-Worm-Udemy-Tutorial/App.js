import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import BookCount from "./src/Components/BookCount";
import { Ionicons } from "@expo/vector-icons";

// const App = () => {
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      totalCount: 0,
      readingCount: 0,
      readCount: 0,
      isAddNewBookVisible: false,
      textInputData: true,
    };
  }
  showAddNewBook = () => {
    this.setState({ isAddNewBookVisible: true });
  };
  hideAddNewBook = () => {
    this.setState({ hideAddNewBook: false });
  };
  addBook = () => {
    alert(this.state, textInputData);
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView style={{ height: 40 }} />
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
        <View style={{ flex: 1 }}>
          {this.state.isAddNewBookVisible && (
            <View style={{ height: 50, flexDirection: "row" }}>
              <TextInput
                onChangeText={(text) => this.setState({ textInputData: text })}
                style={{
                  flex: 1,
                  backgroundColor: "#d3d3d3",
                  padding: 10,
                  fontStyle: "italic",
                }}
                placeholder="Enter Book Name"
                placeholderTextColor="#a9a9a9"
              />
              <TouchableOpacity onPress={this.addBook}>
                <View
                  style={{
                    width: 50,
                    height: 50,
                    backgroundColor: "#90ee90",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Ionicons name="ios-checkmark" color="#f8f8ff" size={40} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.hideAddNewBook}>
                <View
                  style={{
                    width: 50,
                    height: 50,
                    backgroundColor: "#ff8080",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Ionicons name="ios-close" color="#f8f8ff" size={40} />
                </View>
              </TouchableOpacity>
            </View>
          )}
          <TouchableOpacity
            onPress={this.showAddNewBook}
            style={{ position: "absolute", bottom: 20, right: 20 }}
          >
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: "#4dd2ff",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "#000000", fontSize: 30 }}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
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
        <SafeAreaView style={{ height: 40 }} />
      </View>
    );
  }
}

export default App;
