import React from 'react';
import {Text as ReactText, StyleSheet, StyleProp} from 'react-native';
import {useFormStyle} from '../components/Styles';
import {Button as MainButton} from 'react-native-paper';

// type TextProps = {
//   children: React.ReactNode;
//   style?: StyleProp;
// };

export const Button = props => {
  let styles = useFormStyle();
  let {onPress} = props || {};
  return (
    <MainButton
      {...props}
      mode="outlined"
      label="SAVE"
      // loading={loading}
      onPress={() => onPress()}
      labelStyle={{
        color: '#fff',
        fontSize: 18,
        fontWeight: '500',
      }}
      style={styles.buttonStyle}>
      {props.children}
    </MainButton>
  );
};
