import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function StyleSheetAPI() {
  return (
    <View style={styles.container}>
      {/* this is view shows the inheritance of the styles */}
      <View style={styles.darkMode}>
        <Text style={styles.darkModeText}>
          Style Inheritance
          <Text style={styles.boldText}>In Bold</Text>
        </Text>
      </View>
      <View
        style={[
          styles.lightblueBg,
          styles.box,
          styles.boxShadow,
          styles.andriodElevation,
        ]}
      >
        <Text>Light Blue Box</Text>
      </View>
      <View
        style={[
          styles.lightgreenBg,
          styles.box,
          styles.boxShadow,
          styles.andriodElevation,
        ]}
      >
        <Text>Light Green Box</Text>
      </View>
    </View>
  );
}
// we can use export to use it somewhere else if we want to
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    padding: 60,
  },
  darkMode: {
    backgroundColor: "black",
  },
  darkModeText: {
    color: "white",
  },
  boldText: {
    fontWeight: "bold",
  },
  box: {
    width: 250,
    height: 250,
    padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginBottom: 20,
    marginTop: 20,
  },
  lightblueBg: {
    backgroundColor: "lightblue",
  },
  lightgreenBg: {
    backgroundColor: "lightgreen",
  },
  boxShadow: {
    shadowColor: "#333333",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },
  // to use box shadow
  andriodElevation: {
    elevation: 10,
  },
});
