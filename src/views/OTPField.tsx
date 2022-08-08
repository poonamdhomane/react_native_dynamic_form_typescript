import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { TextInput } from "react-native-paper";
import { number } from "yup/lib/locale";

// import OTPInputView from "@twotalltotems/react-native-otp-input";

export const OTPField = ({ onBlur, onChange, value }) => {
  return (
    <>
      <TextInput
        mode="flat"
        autoFocus={true}
        style={{
          ...styles?.input,
          textAlign: "center",
          justifyContent: "center",
          height: 120,
        }}
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
        selectionColor="yellow"
        maxLength={6}
        keyboardType="number-pad"
        activeUnderlineColor="white"
        underlineColor="white"
        placeholder="enter OTP"
        focusable={true}
        textAlign="center"
        theme={{
          colors: {
            placeholder: "gray",
            text: "white",
            primary: "white",
            underlineColor: "transparent",
            // background: "#003489",
          },
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 40,
    color: "white",
    justifyContent: "center",
  },
});
