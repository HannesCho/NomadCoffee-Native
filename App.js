import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import { useState } from "react";
import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";

export default function App() {
  const [loading, setLoading] = useState(true);
  const onFinish = () => setLoading(false);
  const preload = () => {
    const fontsToLoad = [Ionicons.font];
    const fontPromises = fontsToLoad.map((font) => Font.loadAsync(font));
    const imagesToLoad = [
      require("./assets/logo.png"),
      "https://imgr.search.brave.com/8-0zkm9oMHpp5-TaumW4M0ZDCM6xCGN8fQwwt1ChKbQ/fit/1200/1200/ce/1/aHR0cHM6Ly93d3cu/cG5na2V5LmNvbS9w/bmcvZnVsbC80NTMt/NDUzNjA5MF9jb2Zm/ZWUtY3VwLWljb24t/cG5nLWhvdC1jb2Zm/ZWUtdmVjdG9yLXBu/Zy5wbmc",
    ];
    const imagePromises = imagesToLoad.map((image) => Asset.loadAsync(image));
    return Promise.all(...fontPromises, ...imagePromises);
  };
  if (loading) {
    return (
      <AppLoading
        startAsync={preload}
        onError={console.warn}
        onFinish={onFinish}
      />
    );
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
