import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import BookCount from "./src/Components/BookCount";
import { Ionicons } from "@expo/vector-icons";

const App = () => {
  const [totalCount, setTotalCount] = useState(10);
  const [readCount, setReadCount] = useState(0);
  const [readingCount, setReadingCount] = useState(0);
  const [isAddNewBookVisible, setIsAddNewBookVisible] = useState(false);
  const [textInputData, setTextInputData] = useState("");
  const [books, setBooks] = useState([]);
  const [bookData, setBookData] = useState({
    author: "",
    publisher: "",
  });

  const showAddNewBook = () => {
    setIsAddNewBookVisible(true);
  };

  const hideAddNewBook = () => {
    setIsAddNewBookVisible(() => {
      return false;
    });
  };

  const addBook = (book) => {
    setBooks((prev) => {
      return [...prev, book];
    });

    setTotalCount((pre) => {
      return pre + 1;
    });

    setReadCount((pre) => {
      return pre + 1;
    });

    setBookData((pre) => {
      return { ...pre, author: "Varun Nath" };
    });
  };

  const markAsRead = (selectedBook, index) => {
    let newList = books.filter((book) => book !== selectedBook);
  };

  const renderItem = (item, index) => (
    <View style={{ height: 50, flexDirection: "row" }}>
      <View style={{ flex: 1, justifyContent: "center", padding: 10 }}>
        <Text>{item}</Text>
      </View>
      <TouchableOpacity onPress={() => markAsRead(item, index)}>
        <View
          style={{
            width: 100,
            height: 50,
            backgroundColor: "#90ee90",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontWeight: "bold", color: "#ffffff" }}>
            Mark as Read
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ height: 40, backgroundColor: "#ffe6b3" }} />
      <View
        style={{
          height: 70,
          borderBottomWidth: 0.5,
          borderBottomColor: "#000000",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffe6b3",
        }}
      >
        <Text style={{ fontSize: 24 }}>Book Worm</Text>
      </View>
      <View style={{ flex: 1 }}>
        {isAddNewBookVisible && (
          <View style={{ height: 50, flexDirection: "row" }}>
            <TextInput
              onChangeText={(text) => setTextInputData(text)}
              style={{
                flex: 1,
                backgroundColor: "#d3d3d3",
                padding: 10,
                // fontStyle: "italic",
              }}
              placeholder="Enter Book Name"
              placeholderTextColor="#ffffff"
            />
            <TouchableOpacity onPress={() => addBook(textInputData)}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: "#90ee90",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="ios-checkmark" color="#ffffff" size={40} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={hideAddNewBook}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: "#ff8080",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="ios-close" color="#ffffff" size={40} />
              </View>
            </TouchableOpacity>
          </View>
        )}

        <FlatList
          data={books}
          renderItem={({ item }, index) => renderItem(item, index)}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={
            <View style={{ marginTop: 50, alignItems: "center" }}>
              <Text style={{ fontWeight: "bold" }}>Not Reading Any Books.</Text>
            </View>
          }
        />

        <TouchableOpacity
          onPress={showAddNewBook}
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
            <Text style={{ color: "#ffffff", fontSize: 30 }}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 70,
          borderTopWidth: 0.5,
          borderTopColor: "#000000",
          flexDirection: "row",
          backgroundColor: "#ffeecc",
        }}
      >
        <BookCount title="Total" count={totalCount} />
        <BookCount title="Reading" count={readingCount} />
        <BookCount title="Read" count={readCount} />
      </View>
      <SafeAreaView style={{ height: 40, backgroundColor: "#ffeecc" }} />
    </View>
  );
};

export default App;
