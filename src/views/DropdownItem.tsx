import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
// import { fontScale, scale } from "react-native-utils-scale";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useThemeAwareObject, Theme } from "../support";

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      // backgroundColor: theme.colors.accent,
      paddingTop: 10,
    },
    dropdown: {
      height: 50,
      backgroundColor: theme.colors.background,
      borderBottomColor: theme.colors.textColor,
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    containerStyle: {
      backgroundColor: theme.colors.background,
      color: "yellow",
    },
    activeColor: {
      activeColor: theme.colors.textColor,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: "absolute",
      backgroundColor: theme.colors.background,
      color: theme.colors.textColor,
      left: 16,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
      color: theme.colors.textColor,
    },
    selectedTextStyle: {
      fontSize: 16,
      color: theme.colors.textColor,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });

  return styles;
};

const DropdownComponent = ({ options, name, onChange, value }) => {
  const [values, setValues] = useState(value);
  const [isFocus, setIsFocus] = useState(false);
  const styles = useThemeAwareObject(createStyles);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: "white" }]}>
          {/* Dropdown label */}
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        name={name}
        style={[styles.dropdown, isFocus && { borderColor: "white" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        containerStyle={styles.containerStyle}
        data={options}
        activeColor={styles.activeColor}
        // search
        maxHeight={scale(200)}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "Select item" : "..."}
        searchPlaceholder="Search..."
        value={values}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValues(item.value);
          onChange(item.value);
          setIsFocus(false);
        }}
        // renderLeftIcon={() => (
        //   <AntDesign
        //     style={styles.icon}
        //     color={isFocus ? "white" : "black"}
        //     name="Safety"
        //     size={scale(20)}
        //   />
        // )}
      />
    </View>
  );
};

export default DropdownComponent;
