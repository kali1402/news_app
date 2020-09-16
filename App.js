import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import Login from "./pages/Login";
import { Provider } from "react-redux";
import { store } from "./store";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        ...Ionicons.font,
      });
    };
    loadFont().then(() => {
      setIsLoading(false);
    });
  }, []);

  if (!isLoading) {
    return (
      <Provider store={store}>
        <Login />
      </Provider>
    );
  } else {
    return <Text>error</Text>;
  }
}