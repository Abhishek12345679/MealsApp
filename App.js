import React, { useState } from "react";

import { enableScreens } from "react-native-screens";

import * as Font from "expo-font";
import { AppLoading } from "expo";
import MealsNavigator from "./navigator/MealsNavigator";

import { createStore, combineReducers } from "redux";
import { Provider } from 'react-redux'
import mealsReducer from './store/reducers/meals';

// useScreens() is deprecated
enableScreens();

const rootReducer = combineReducers({
  meals: mealsReducer
})
const store = createStore(rootReducer)

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/Fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/Fonts/OpenSans-Bold.ttf")
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }

  return <Provider store={store}><MealsNavigator /></Provider>;
}
