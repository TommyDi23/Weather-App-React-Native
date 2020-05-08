import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

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
    <View>
      <TextInput
        placeholder="search city"
        onChangeText={cityInputHandler}
        value={searchedCity}
      />
      <Button title="search" onPress={searchCityHandler} />
    </View>
  );
};

export default SearchBar;
