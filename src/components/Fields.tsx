import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {useController} from 'react-hook-form';
import {TextInput} from 'react-native-paper';
import {Checkbox} from 'react-native-paper';
import DatePicker from '../views/DatePicker/DatePicker';
import {ImageOrVideo} from 'react-native-image-crop-picker';
import {OTPField} from '../views/OTPField';
import {GooglePlacesInput} from '../views/GooglePlacesInput';
import Dropdown from '../views/Dropdown';
import {MobileInput} from '../views/MobileNumber/MobileInput';
import {PickImage} from '../views/image/PickImage';
import {useIForm} from './IFormProvider';
import {Theme} from '../../support/theme';
import {useFormColor, useFormStyle} from './Styles';
import Input from '../views/Input';
import Logo from '../views/Logo';
import {PoweredBy} from '../views/PoweredBy';

export default function Fields({object, control, imageLoader = undefined}) {
  const nameField = object.name;
  const {
    field: {onChange, onBlur, name, value, ref},
    fieldState: {invalid, isTouched, isDirty, error},
    formState: {touchedFields, dirtyFields, errors},
  } = useController({
    name: nameField,
    control,
    rules: {required: true},
    defaultValue: object.value,
  });

  const {
    type,
    // nameField,
    options,
    label,
    infoText = '',
    placeholder,
  } = object;
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  let {sendFieldsDataBackToFormWhileEditing, outlined} = useIForm();
  let style = useFormStyle();
  let color = useFormColor();

  const onAvatarChange = (name: string, image: ImageOrVideo) => {
    console.log(image);
    // if (sendData) {
    //   sendData(name, image);
    // }
    if (sendFieldsDataBackToFormWhileEditing) {
      sendFieldsDataBackToFormWhileEditing(name, image);
    }
    onChange(image);
  };

  const getField = () => {
    // console.log("Erorrr 1111 ========>", error);
    // console.log("Erorrrs 2222 =====>", errors);
    // console.log("Erorrrs 3333 =====>", errors);

    switch (type) {
      case 'text':
        return (
          <Input
            type="text"
            label={`${label}`}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            mode={outlined ? 'outlined' : 'flat'}
          />
        );

      case 'age':
        return (
          <Input
            type="age"
            label={`${label}`}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            keyboardType="number-pad"
            mode={outlined ? 'outlined' : 'flat'}
          />
        );

      case 'textarea':
        return (
          <Input
            type="textarea"
            label={`${label}`}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            keyboardType="number-pad"
            multiline={true}
            mode={outlined ? 'outlined' : 'flat'}
          />
        );

      case 'mobile':
        return (
          <Input
            type="textarea"
            label={`${label}`}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            keyboardType="number-pad"
            multiline={true}
            maxLength={10}
            contextMenuHidden={true}
            mode={outlined ? 'outlined' : 'flat'}
          />
        );

      case 'password':
        return (
          <Input
            type="text"
            label={`${label}`}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            secureTextEntry={secureTextEntry}
            right={
              <TextInput.Icon
                color="white"
                name={!secureTextEntry ? 'eye' : 'eye-off'}
                onPress={() => {
                  setSecureTextEntry(!secureTextEntry);
                  return false;
                }}
              />
            }
            mode={outlined ? 'outlined' : 'flat'}
          />
        );

      case 'email':
        return (
          <Input
            type="text"
            label={`${label}`}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            right={<TextInput.Icon name="email" />}
            keyboardType="email-address"
            autoCapitalize="none"
            mode={outlined ? 'outlined' : 'flat'}
          />
        );

      case 'countrypicker':
        return (
          <MobileInput
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            // sendMobile={sendMobile}
          />
        );
      case 'url':
        return (
          <Input
            type="text"
            label={`${label}`}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            mode={outlined ? 'outlined' : 'flat'}
          />
        );

      case 'otp':
        return <OTPField onChange={onChange} onBlur={onBlur} value={value} />;

      case 'select':
        return (
          // <DropdownComponentNew
          //   options={options}
          //   name={name}
          //   value={value}
          //   onChange={(e) => {
          //     sendData(name, e);
          //     onChange(e);
          //   }}
          // />
          <>
            <Dropdown
              name={name}
              label={label}
              // defaultValue={existValue}
              value={value}
              options={options}
              placeholder={placeholder}
              enabled
              selectedCallback={e => {
                if (sendData) {
                  sendData(name, e, object);
                }
                onChange(e);
              }}></Dropdown>
            {object?.infoText !== '' && (
              <Text style={{color: 'white'}}>{object?.infoText}</Text>
            )}
          </>
        );

      case 'checkbox':
        return (
          <Checkbox
            ref={ref}
            status={true ? 'checked' : 'unchecked'}
            onPress={() => {
              // setChecked(!checked);
            }}
            color="green"
            uncheckedColor="red"
          />
        );
      case 'datetime':
        // let rangeValue = { startDate: "10/11/2021", endDate: "10 AM" };
        return (
          <DatePicker
            name={nameField}
            mode={'DATE_TIME'}
            ref={ref}
            rangeValue={value}
            onChange={onChange}
            label={label}
          />
        );
      case 'bannerImage':
        return (
          <PickImage
            imageLoader={imageLoader && imageLoader}
            style={styles.bannerImage}
            onChange={image => onAvatarChange(name, image)}
            source={
              value && value !== ''
                ? {uri: value}
                : require('../views/image/icons/avatar.png')
            }
          />
        );
      case 'profileImage':
        return (
          <PickImage
            style={styles.profileImage}
            onChange={image => onAvatarChange(name, image)}
            source={
              object?.value?.includes('http')
                ? {uri: object.value}
                : require('../views/image/icons/avatar.png')
            }
          />
        );
      case 'googleplaces':
        return (
          <>
            <GooglePlacesInput selectedCallback={onChange} />
            <View
              style={{
                height: 1,
                width: '100%',
                backgroundColor: 'white',
              }}></View>
          </>
        );

      case 'logo':
        return (
          <>
            <Logo width={300} height={100} />
          </>
        );
    }
  };

  console.log('error :', error);
  return (
    <View>
      {getField()}

      <>
        {error && (
          <Text style={{color: 'red'}}>
            {error.type ? error.type : error.message}
          </Text>
        )}
      </>
    </View>
  );
}
const styles = {
  input: {
    // backgroundColor: "white",
    // color: theme.colors.primary,
    // background: theme.colors.primary,
  },

  bannerImage: {
    width: '100%',
    height: 130,
    marginTop: 10,
  },
  profileImage: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    borderRadius: 75,
  },
};
