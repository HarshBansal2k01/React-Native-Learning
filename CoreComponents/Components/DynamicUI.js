import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import React from "react";

export default function DynamicUI() {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.box,
          {
            width: windowWidth > 500 ? "70%" : "90%",
            height: windowHeight > 600 ? "60%" : "90%",
          },
        ]}
      >
        <Text
          style={{
            fontSize: windowWidth > 500 ? 50 : 24,
          }}
        >
          Welcome!
        </Text>
      </View>
    </View>
  );
}

// DIMENSION (drawback) :- Issue of orienrtation has to be set in app.json and ui is also disturbed when land to potrait is done have to restart the server so it is no dynamic (we have to use usestate and code is complicated)

//recomended
// useWindowDimension hook can be used as a short cut for dimension to make it dynamic

// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
