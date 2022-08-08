import * as React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { ImageOrVideo } from "react-native-image-crop-picker";
import { PickImage } from "./PickImage";

export const Profile = () => {
  const onAvatarChange = (image: ImageOrVideo) => {
    console.log(image);
  };
  return (
    <View style={styles.scroll}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.userRow}>
        <PickImage
          onChange={onAvatarChange}
          source={require("./icons/avatar-placeholder.png")}
        />
      </View>
      <View style={styles.content} />
    </View>
  );
};

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: "white",
    flex: 1,
  },
  userRow: {
    alignItems: "center",
    padding: 15,
    marginTop: 70,
  },
  content: {
    flex: 1,
    backgroundColor: "#d8d8db",
  },
});
