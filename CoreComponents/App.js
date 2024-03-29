import { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
  StatusBar,
  ActivityIndicator,
  Alert,
  StyleSheet,
} from "react-native";
import Greet from "./Components/Greet";
import StyleSheetAPI from "./Components/StyleSheetApi";
import Layouts from "./Components/Layouts";
import DynamicUI from "./Components/DynamicUI";
import SafeAreaView from "./Components/SafeAreaView";
import RNList from "./Components/RNList";
import RNForms from "./Components/RNForms";
import Networking from "./Components/Networking";
import Navigation from "./Components/Navigation";
import DrawerNavigtion from "./Components/DrawerNavigtion";
import TabNavigation from "./Components/TabNavigation";
const logoImage = require("./assets/adaptive-icon.png");
const bgImage = require("./assets/splash.png");
export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    // <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
    //   {/* <View
    //     style={{ width: 200, height: 200, backgroundColor: "lightblue" }}
    //   ></View>
    //   <View
    //     style={{ width: 200, height: 200, backgroundColor: "lightgreen" }}
    //   ></View> */}
    //   {/* <Text>
    //     {" "}
    //     <Text style={{ color: "white" }}>Text </Text> Component
    //   </Text>
    //   <Image source={logoImage} style={{ height: 300, width: 300 }} />
    //   <Image
    //     source={{ uri: "https://picsum.photos/300" }}
    //     style={{ height: 300, width: 300 }}
    //   />
    //   <ImageBackground style={{ flex: 1 }} source={bgImage}>
    //     <Text>Back Ground Image</Text>
    //   </ImageBackground> */}
    //   {/* <Button
    //     title="Press"
    //     onPress={() => {
    //       setIsModalVisible(true);
    //       console.log("btn press");
    //     }}
    //     color="midnightblue"
    //   />
    //   <Modal
    //     visible={isModalVisible}
    //     onRequestClose={() => setIsModalVisible(false)}
    //     animationType="slide"
    //     presentationStyle="formSheet" //only for ios
    //   >
    //     <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
    //       <Text>Modal Component</Text>
    //       <Button
    //         title="Close"
    //         color="midnightblue"
    //         onPress={() => {
    //           console.log("close");
    //           setIsModalVisible(false);
    //         }}
    //       />
    //     </View>
    //   </Modal>
    //   <ScrollView>
    //     <Pressable
    //       onPress={() => {
    //         console.log("image press");
    //       }}
    //     >
    //       <Image source={logoImage} style={{ height: 300, width: 300 }} />
    //     </Pressable>
    //     <Pressable
    //       //pressable :- to create custom btn
    //       onPress={() => {
    //         console.log("text press");
    //       }}
    //     >
    //       <Text>
    //         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
    //         iusto eius delectus cumque molestias facere, reprehenderit sapiente
    //         tenetur ratione similique nihil quisquam officia excepturi
    //         consequatur, soluta pariatur minima qui eos nobis eveniet nemo autem
    //         reiciendis! Nostrum earum minus dolor, quas nam sit esse adipisci
    //         culpa at ex. Numquam in iusto dignissimos placeat ea. Maxime quasi
    //         officia eius vitae, minima, dignissimos laboriosam autem nemo id
    //         quam neque commodi saepe nihil, aliquid harum libero facere
    //         explicabo hic. Ut, molestias exercitationem id necessitatibus maxime
    //         eos aliquid ipsa quisquam eum adipisci, debitis doloremque tempore
    //         atque amet laborum. Atque magnam quod assumenda id? Veritatis,
    //         dolorum incidunt suscipit iusto deleniti libero explicabo magni,
    //         fugit aut cupiditate illum quidem sequi, tempore dolor sit vitae.
    //         Illo ipsa ipsam reiciendis rem. Hic, unde. Necessitatibus quis
    //         voluptas libero vel similique quia voluptates consectetur, voluptate
    //         illum repudiandae commodi sapiente cum maiores ducimus facilis odit
    //         quaerat nihil, suscipit explicabo nemo non. Nam.
    //       </Text>
    //     </Pressable>
    //     <Image source={logoImage} style={{ height: 300, width: 300 }} />
    //   </ScrollView> */}

    //   {/* <StatusBar backgroundColor="lightgreen" barStyle="dark-content"/> */}
    //   {/* <ActivityIndicator />
    //   <ActivityIndicator size="large" color="black" />
    //   <ActivityIndicator size="large" color="black" animating={false} /> */}

    //   {/* <Button title="Alert" onPress={() => Alert.alert("alert checking")} />
    //   <Button
    //     title="Alert2"
    //     onPress={() => Alert.alert("alert checking", "alert with msg")}
    //   />
    //   <Button
    //     title="Alert2"
    //     onPress={() =>
    //       Alert.alert("alert checking", "alert with msg", [
    //         {
    //           text: "Cancel",
    //           onPress: () => console.log("Cancel pressed"),
    //         },
    //         {
    //           text: "OK",
    //           onPress: () => console.log("OK pressed"),
    //         },
    //       ])
    //     }
    //   /> */}
    //   {/* <Greet name="Harsh" /> */}
    //   {/* <StyleSheetAPI/> */}

    // </View>

    // LAYOUT-FLEX

    // <View style={styles.container}>
    //   <Layouts style={{ backgroundColor: "#8e9b00" }}>Layouts 1</Layouts>
    //   <Layouts style={{ backgroundColor: "#b65d1f" }}>Layouts 2</Layouts>
    //   <Layouts style={{ backgroundColor: "#1c4c56" }}>Layouts 3</Layouts>
    //   <Layouts style={{ backgroundColor: "#ab9156" }}>Layouts 4</Layouts>
    //   <Layouts style={{ backgroundColor: "#6b0803" }}>Layouts 5</Layouts>
    //   <Layouts style={{ backgroundColor: "#1c4c56" }}>Layouts 6</Layouts>
    //   <Layouts style={{ backgroundColor: "#b95f21" }}>Layouts 7</Layouts>
    // </View>

    //DYNAMIC

    // <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
    //    {/* will help to run coe in every size device */}
    // {/* <DynamicUI /> */}
    // <SafeAreaView/>
    // </View>

    // LIST

    <View style={{ flex: 1 }}>
      {/* <RNList/> */}
      {/* <RNForms/> */}
      {/* <Networking /> */}
      {/* <Navigation/> */}
      {/* <DrawerNavigtion/> */}
      <TabNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64,
    // borderWidth: 6,
    // borderColor: "red",
    alignItems: "center",
  },
});
