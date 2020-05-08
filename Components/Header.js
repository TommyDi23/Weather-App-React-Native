import React from "react";

import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text>Mobo weather</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    backgroundColor: "yellow",
    borderColor: "black",
    borderWidth: 1,
    padding: 20
  }
});

export default Header;
