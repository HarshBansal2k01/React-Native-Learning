import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function StyleSheetAPI() {
  return (
    <View style={styles.container}>
      <Text>StyleSheetAPI</Text>
    </View>
  );
}
// we can use export to use it somewhere else if we want to
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#plum",
    padding: 60,
  },
});
