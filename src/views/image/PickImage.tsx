import React from 'react';
import {
  Dimensions,
  Image,
  ImageProps,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImagePicker, {ImageOrVideo} from 'react-native-image-crop-picker';
import Modal from 'react-native-modal';
import Loader from '../Loader';
import {CameraIcon, ImageIcon} from './icons';

interface PickImageProps extends ImageProps {
  imageLoader: boolean;
  onChange?: (file: ImageOrVideo) => void;
}
const {width: totalWidth, height: totalHeight} = Dimensions.get('window');

export const PickImage = (props: PickImageProps) => {
  const [uri, setUri] = React.useState(props.source?.uri || undefined);
  const [visible, setVisible] = React.useState(false);
  const [imagePreview, setImagePreview] = React.useState(false);
  const close = () => setVisible(false);
  const open = () => setVisible(true);
  const showImagePreview = () => setImagePreview(true);

  const chooseImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
      includeExif: true,
    })
      .then(image => {
        setUri(image.path);
        props.onChange?.(image);
      })
      .finally(close);
  };

  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
      includeExif: true,
    })
      .then(image => {
        setUri(image.path);
        props.onChange?.(image);
      })
      .finally(close);
  };

  return (
    <>
      <TouchableOpacity onPress={open} onLongPress={showImagePreview}>
        {props.imageLoader == true ? (
          <View
            style={[
              props.style ? props.style : styles.avatar,
              {backgroundColor: 'lightgray'},
            ]}>
            <Loader />
          </View>
        ) : (
          <Image
            style={props.style ? props.style : styles.avatar}
            {...props}
            source={uri ? {uri} : props.source}
          />
        )}
      </TouchableOpacity>
      <Modal
        isVisible={visible}
        onBackButtonPress={close}
        onBackdropPress={close}
        style={{justifyContent: 'flex-end', margin: 0}}>
        <SafeAreaView style={styles.options}>
          <Pressable style={styles.option} onPress={chooseImage}>
            <ImageIcon />
            <Text>Library </Text>
          </Pressable>
          <Pressable style={styles.option} onPress={openCamera}>
            <CameraIcon />
            <Text>Camera</Text>
          </Pressable>
        </SafeAreaView>
      </Modal>
      <Modal isVisible={imagePreview}>
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => setImagePreview(false)}>
          <Image
            style={{width: totalWidth, height: totalHeight, padding: 20}}
            source={uri ? {uri} : props.source}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  avatar: {
    paddingTop: 20,
    height: 100,
    width: 100,
    borderRadius: 100,
    padding: 20,
  },

  options: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  option: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
