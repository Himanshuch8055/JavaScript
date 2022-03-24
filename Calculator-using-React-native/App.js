import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";
// import Buttons from "./src/LoadingPage/Buttons";

const App = () => {
  const [number, onChangeNumber] = React.useState(null);
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ height: 30, backgroundColor: "White" }} />
      <View style={styles.input}>
        <View>
          <TextInput
            style={{
              textAlign: "right",
              margin: 4,
              fontSize: 60,
              height: 150,
              borderColor: "red",
            }}
            onChangeText={onChangeNumber}
            value={number}
            keyboardType="numeric"
          />
        </View>
        <View>
          <Text
            style={{
              textAlign: "right",
              margin: 4,
              fontSize: 30,
              height: 150,
              borderColor: "red",
            }}
          >
            Answer
          </Text>
        </View>
      </View>

      <View style={styles.bottom}>
        <View style={styles.Buttons}>
          <Button
            title="1"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <View style={styles.Buttons}>
          <Button
            title="2"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <View style={styles.Buttons}>
          <Button
            title="3"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <View style={styles.Buttons}>
          <Button
            title="4"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <View style={styles.Buttons}>
          <Button
            title="5"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <View style={styles.Buttons}>
          <Button
            title="6"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <View style={styles.Buttons}>
          <Button
            title="7"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <View style={styles.Buttons}>
          <Button
            title="8"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <View style={styles.Buttons}>
          <Button
            title="9"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <View style={styles.Buttons}>
          <Button
            title="0"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <View style={styles.Buttons}>
          <Button
            title="+"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <View style={styles.Buttons}>
          <Button
            title="-"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <View style={styles.Buttons}>
          <Button
            title="/"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <View style={styles.Buttons}>
          <Button
            title="*"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <View style={styles.Buttons}>
          <Button
            title="="
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
      <SafeAreaView style={{ height: 30, backgroundColor: "White" }} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 1,
    margin: 1,
    height: 300,
    // borderWidth: 1,
    // borderTopColor: "red",
    // borderColor: "red",
  },
  bottom: {
    // margin: 1,
    // flex: 1,
    borderWidth: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  Buttons: {
    // flex: 0.3,
    backgroundColor: "red",
    height: 80,
    fontSize: 20,
    margin: 10,
    width: 80,
    borderWidth: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export default App;
