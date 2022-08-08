import React from 'react';
import {
  Text as ReactText,
  StyleSheet,
  StyleProp,
  TextStyle,
  View,
} from 'react-native';
import {useFormStyle} from '../components/Styles';
import {Text} from './Text';

export const PoweredBy = ({companyName}) => {
  let styles = useFormStyle();
  return (
    <View
      style={{
        alignItems: 'center',
      }}>
      <Text
        style={{textAlign: 'center', width: '100%', backgroundColor: 'blue'}}>
        Powered By
      </Text>
      <Text> {companyName} </Text>
    </View>
  );
};
