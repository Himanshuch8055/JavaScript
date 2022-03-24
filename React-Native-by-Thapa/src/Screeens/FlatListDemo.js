import React from "react";
import { Text, StyleSheet, FlatList } from "react-native";

const FlatListDemo = () => {
  const name = [
    {
      index: "1",
      name: "My",
    },
    {
      index: "2",
      name: "Name",
    },
    {
      index: "3",
      name: "is",
    },
    {
      index: "4",
      name: "HIMANSHU",
    },
    {
      index: "5",
      name: "CHAUHAN",
    },
    {
      index: "6",
      name: "CHAUHAN",
    },
    {
      index: "7",
      name: "CHAUHAN",
    },
    {
      index: "8",
      name: "CHAUHAN",
    },
    {
      index: "9",
      name: "CHAUHAN",
    },
    {
      index: "10",
      name: "CHAUHAN",
    },
  ];
  return (
    <FlatList
      style={style.listStyle}
      keyExtractor={(key) => {
        return key.index;
      }}
      horizontal
      // inverted
      showsHorizontalScrollIndicator={false}
      data={name}
      renderItem={({ item }) => {
        console.log(item.name);
        return <Text style={style.textStyle}>{item.name}</Text>;
      }}
    />
  );
};

const style = StyleSheet.create({
  textStyle: {
    fontSize: 40,
    padding: 30,
    backgroundColor: "#E9E9E9",
    margin: 20,
    color: "red",
  },
  listStyle: {
    textAlign: "center",
    margin: 20,
    padding: 10,
  },
});

export default FlatListDemo;
