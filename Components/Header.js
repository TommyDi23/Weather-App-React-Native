import React from "react";

import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Mobo weather</Text>
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
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    padding: 30,
    marginTop: 0
  },
  headerTitle: {
    color: "black",
    fontSize: 20
  }
});

export default Header;
