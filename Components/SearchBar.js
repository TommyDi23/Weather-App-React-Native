import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import Modal from "react-native-modal";

const SearchBar = props => {
  const [searchedCity, setSearchedCity] = useState("");

  const cityInputHandler = enteredCity => {
    setSearchedCity(enteredCity);
  };

  const searchCityHandler = () => {
    props.onSearchCity(searchedCity);
    setSearchedCity("");
  };


  return (
    <Modal
      isVisible={props.showSearch}
      animationIn="fadeInDownBig"
      backdropOpacity={1}
      deviceHeight={100}
    >
      <View style={styles.modal}>
        <View>
          <TextInput
            style={{ color: "white", fontSize:25 }}
            placeholder="search city"
            onChangeText={cityInputHandler}
            value={searchedCity}
          />
          <Button title="get weather of city" onPress={searchCityHandler} />
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modal: {
    flex: 2
  }
});

export default SearchBar;
