import React from "react";
import { AppLoading, Asset } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { render } from "react-dom";

export default class App extends React.Component {
  state = {
    loaded: false
  };

  handleError = error => console.log(error);

  handleLoaded = () => this.setState({ loaded: true });

  loadAsset = async () => {
    await Font.loadAsync({
      ...Ionicons.font
    });
    // await Asset.loadAsync([
    //   require("image/icon.png")
    // ]);
  };

  render() {
    const { loaded } = this.state;

    if (loaded) {
      return (
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      );
    } else {
      return (
        <AppLoading
          startAsync={this.loadAsset}
          onFinish={this.handleLoaded}
          onError={this.handleLoaded}
        />
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
