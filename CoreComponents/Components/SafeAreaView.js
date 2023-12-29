import { View, Text, StyleSheet, SafeAreaView, Platform } from "react-native";
import React from "react";
import CustomBtn from "./CustomBtn";

export default function () {
  // SafeAreaView is basically help out to fig out the save area for the view of ui so that it is always in afe area
  // zone of the ios/andriod phones no mayter what size

  //   PLATFORM :- use it when small platform related changes are their
  // it is used to detect whether which os we are using and do the cha ges accordingly

  //NOTE:- If the changes are greater in the code for different platform than create different files with
  //related extentions
  //-> for eg the custombtn:- it will automatically detect which platform it has to use
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Welcome</Text>
          <CustomBtn title="Press me" onPress={() => alert("Pressed")} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "plum",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  box: {
    padding: 20,
  },
  text: {
    ...Platform.select({
      ios: {
        color: "purple",
        fontSize: 24,
      },
      android: {
        color: "blue",
        fontSize: 30,
      },
    }),
    fontWeight: "bold",
    textAlign: "center",
  },
});
