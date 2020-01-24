import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

//모든 스크린은 네비게이션 props를 가지고 있다.
export default ({ navigation }) => (
  <>
    <Text>Movies</Text>
    <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
      <Text style={styles.textStyle}>Go to detail</Text>
    </TouchableOpacity>
  </>
);

const styles = StyleSheet.create({
  textStyle: {
    marginTop: 20
  }
});
