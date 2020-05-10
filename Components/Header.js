import React from "react";

import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const Header = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitleFirst}> Mobo </Text>
      <Text style={styles.headerTitleSecond}>Weather</Text>
      {/* <Button title="About" onPress={() => navigation.navigate("About")} /> */}
      <View style={styles.about}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("About")}
        >
          <Text>About</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: "yellow",
    borderColor: "black",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    borderWidth: 2,
    padding: 30,
    marginTop: 0,
    flexDirection: "row"
  },
  headerTitleFirst: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "monospace",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    marginLeft: -20,
    backgroundColor: "white",
    borderWidth: 3
  },
  headerTitleSecond: {
    color: "#F5F5F5",
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "sans-serif",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    backgroundColor: "black",
    borderWidth: 3
  },
  button: {
    alignItems: "flex-end",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  about: {
    alignItems:'flex-end',
    marginLeft: 80
  }
});

export default Header;
