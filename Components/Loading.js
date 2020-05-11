import React from "react";

import { View, Text, StyleSheet } from "react-native";

const Loading = () => {
  return (
    <View style={styles.loadingScreen}>
      <Text style={styles.loadingText}>Loading, please wait</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingScreen: {
    flex: 1,
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center"
  },
  loadingText: {
    fontSize: 35,
    fontWeight: "bold",
    fontFamily: "monospace"
  }
});

export default Loading;
