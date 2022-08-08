import React from "react";
import { View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Icon from "react-native-vector-icons/Ionicons";
import { useColor, useStyle } from "../support/Style";

export const GooglePlacesInput = (props) => {
  let style = useStyle();
  let color = useColor();

  return (
    <GooglePlacesAutocomplete
      placeholder="Select Location"
      minLength={2}
      autoFocus={false}
      returnKeyType={"search"}
      listViewDisplayed={false}
      fetchDetails={true}
      enablePoweredByContainer={false}
      placeholderTextColor={"gray"}
      renderDescription={(row) => row.description}
      onPress={(data, details = null) => {
        console.log("location selected", details, data);
        props.selectedCallback(details);
      }}
      getDefaultValue={() => (props.locationVenue ? props.locationVenue : "")}
      query={{
        key: props?.APIKEY, //key from google cloud
        language: "en",
        types: "geocode",
        components: "country:in",
      }}
      styles={{
        textInputContainer: {
          width: "100%",
          backgroundColor: color.background,
          height: 50,
          borderRadius: 16,
          borderTopWidth: 0,
          borderBottomWidth: 1,
          alignItems: "center",
          borderColor: "white",
          paddingTop: 20,
        },

        container: { backgroundColor: color.background, borderRadius: 16 },
        textInput: {
          backgroundColor: color.background,
          color: color.textColor,
          fontSize: 16,
          marginBottom: 4,
        },
        listView: { color: color.background },
        description: {
          fontWeight: "bold",
          color: color.background,
        },
      }}
      // predefinedPlaces={[homePlace]}

      nearbyPlacesAPI="GooglePlacesSearch"
      onFail={(error) => console.error(error)}
      debounce={200}
      renderRightButton={() => (
        <View style={{ marginEnd: 18 }}>
          <Icon name={"location"} color={color.textColor} size={24} />
        </View>
      )}
    />
  );
};
