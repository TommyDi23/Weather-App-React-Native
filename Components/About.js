import React from "react";

import { View, Text, StyleSheet } from "react-native";

const About = () => {
  return (
    <View>
      <Text style={styles.words}>hello world</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  words: {
    fontSize: 20
  }
});

export default About
