import React from "react";

import {
  View,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity
} from "react-native";

const About = () => {
  return (
    <View style={styles.about}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Its All About Me</Text>
      </View>
      <View>
        <Text style={styles.words}>
          A driven software developer who attended and recently graduated from
          Northcoders coding bootcamp, seeking a role in the tech industry.
          Key-values learned whilst being a student here is the importance of
          Test-driven development, and pair programming as well as supporting
          fellow students in group projects in a fast-paced learning
          environment.{" "}
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Linking.openURL(
              "https://github.com/TommyDi23/Weather-App-React-Native"
            );
          }}
        >
          <Text style={styles.buttonText}>Link to Github Repo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  about: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    padding: 20,
    backgroundColor: "yellow"
  },
  header: {
    margin: 20
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5
  },
  words: {
    fontSize: 20,
    fontFamily: "sans-serif"
  },
  button: {
    fontSize: 30,
    backgroundColor: "black",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginTop: 25
  },
  buttonText: {
    marginTop: 10,
    margin: 10,
    color: "white",
    fontSize: 15,
    fontFamily: 'monospace'
  }
});

export default About;
