import React from 'react';
import {
  Text as ReactText,
  StyleSheet,
  StyleProp,
  TextStyle,
} from 'react-native';
import {useFormStyle} from '../components/Styles';

type TextProps = {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
};

export const Text = ({style, children}: TextProps) => {
  let styles = useFormStyle();
  return <ReactText style={styles.textFont}>{children}</ReactText>;
};
