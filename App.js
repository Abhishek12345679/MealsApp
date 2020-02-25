import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { useScreens } from "react-native-screens";

import * as Font from "expo-font";
import { AppLoading } from "expo";
import MealsNavigator from "./navigator/MealsNavigator";

useScreens();

const fetchFonts = () => {
  Font.loadAsync({
    "open-sans": require("./assets/Fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/Fonts/OpenSans-Bold.ttf")
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (<
      AppLoading startAsync={fetchFonts}
      onFinish={setFontLoaded(true)}
      onError={err => console.log(err)}
    />
    );
  }

  return <MealsNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});