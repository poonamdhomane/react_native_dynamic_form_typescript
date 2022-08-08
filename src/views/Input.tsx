import React from 'react';
import {TextInput} from 'react-native-paper';
import {useFormColor} from '../components/Styles';

//name key for submit to api and uniqueness between each fields even if the type is same

export default function Input(props) {
  let color = useFormColor();
  let {label, onChange, onBlur, value, keyboardType, mode} = props || {};

  return (
    <>
      <TextInput
        {...props}
        // ref={ref}
        mode="flat"
        label={`${label}`}
        onBlur={onBlur}
        onChangeText={onChange}
        // defaultValue={existValue}
        value={value}
        placeholder={label}
        placeholderTextColor={color.placeholder}
        selectionColor={color.primary}
        activeOutlineColor={color.primary}
        outlineColor={color.placeholder}
        underlineColor={color.placeholder}
        activeUnderlineColor={color.primary}
        keyboardType={keyboardType && keyboardType}
        // error={errors[nameField]}
        theme={{
          colors: {
            placeholder: color.placeholder,
            text: color.textColor,
            primary: color.primary,
            // underlineColor: color.placeholder,
            background: color.backgroundOverlay,
          },
        }}
      />
    </>
  );
}
