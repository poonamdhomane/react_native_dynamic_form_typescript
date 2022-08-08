import React from "react";
import { ActivityIndicator } from "react-native-paper";
import { useColor } from "../support/Style";

export default function Loader() {
  let color = useColor();
  return (
    <ActivityIndicator
      size={"small"}
      color={color.surface}
      style={{ height: 100 }}
    />
  );
}
