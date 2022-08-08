import React, { useState } from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-paper";
import { useColor } from "../../support/Style";
import { CountryPicker } from "./CountryPicker/screens";

export const MobileInput = ({
  sendMobile,
  onBlur,
  onChange,
  value,
  backColor,
}) => {
  let color = useColor();
  // let style = useStyle();

  let countryPickerRef = undefined;
  const [countryCode, setCountryCode] = useState("IN");
  const [selectedCountry, setSelectedCountry] = useState("91");
  const [mobile, setMobile] = useState("");

  const sendSelectedMobileCountry = (text) => {
    if (onChange) {
      onChange(`+${selectedCountry}${text}`);
    }
    if (onBlur) {
      onBlur(`+${selectedCountry}${text}`);
    }

    setMobile(text);
    if (sendMobile) {
      sendMobile(`+${selectedCountry}${text}`);
    }
  };

  const CountryDropDown = () => {
    return (
      <CountryPicker
        countryPickerRef={(ref: any) => {
          countryPickerRef = ref;
        }}
        enable={true}
        darkMode={true}
        countryCode={countryCode ? countryCode : "IN"}
        containerConfig={{
          showFlag: true,
          showCallingCode: true,
          showCountryName: false,
          showCountryCode: false,
        }}
        modalConfig={{
          showFlag: true,
          showCallingCode: true,
          showCountryName: true,
          showCountryCode: true,
        }}
        onSelectCountry={(data: any) => {
          console.log("DATA", data);
          // onChange(data)
          setSelectedCountry(data.callingCode);
          setCountryCode(data.code);
        }}
        onInit={(data: any) => {
          console.log("DATA", data);
        }}
        onOpen={() => {
          console.log("Open");
        }}
        onClose={() => {
          console.log("Close");
        }}
        containerStyle={{
          container: {
            backgroundColor: backColor ? backColor : color.background,
            height: "100%",
            paddingLeft: 10,
          },
          flagStyle: {},
          callingCodeStyle: { color: color.textColor },
          countryCodeStyle: { color: color.textColor },
          countryNameStyle: { color: color.textColor },
        }}
        modalStyle={{
          container: { backgroundColor: color.background, paddingVertical: 20 },
          searchStyle: { color: color.textColor },
          tileStyle: { color: color.textColor },
          itemStyle: {
            itemContainer: { backgroundColor: color.background },
            flagStyle: {},
            countryCodeStyle: { color: color.textColor },
            countryNameStyle: { color: color.textColor },
            callingNameStyle: { color: color.textColor },
          },
        }}
        title={"Country"}
        searchPlaceholder={"Search"}
        showCloseButton={true}
        showModalTitle={true}
      />
    );
  };
  return (
    <View>
      <View
        style={{
          backgroundColor: color.background,
          height: 40,
          //   width: 100,
          justifyContent: "center",
          //   paddingLeft: 10,
          borderBottomWidth: 1,
          borderBottomColor: "gray",
          //   flexDirection: "row",
        }}
      >
        <CountryDropDown />
      </View>

      <TextInput
        // style={styles.input}
        mode="flat"
        label="Mobile Number"
        maxLength={10}
        keyboardType="number-pad"
        contextMenuHidden={true}
        onChangeText={(text) => sendSelectedMobileCountry(text)}
        // onBlur={(text) => sendSelectedMobileCountry(text)}
        value={mobile}
        placeholder={"Mobile Number"}
        placeholderTextColor="gray"
        selectionColor="blue"
        activeOutlineColor="yellow"
        outlineColor="white"
        activeUnderlineColor="white"
        underlineColor="white"
        theme={{
          colors: {
            background: backColor ? backColor : color.background,
            placeholder: "gray",
            text: "white",
            primary: "white",
            underlineColor: "transparent",
            // background: "#003489",
          },
        }}
      />
    </View>
  );
};
