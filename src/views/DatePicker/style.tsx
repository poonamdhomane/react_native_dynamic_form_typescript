import React from 'react';
// import {fontScale, scale} from 'react-native-utils-scale';
import {StyleSheet} from 'react-native';
import {Theme, useThemeAwareObject} from '../../../support/theme';

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      // backgroundColor: theme.colors.accent,
      paddingTop: 10,
    },
    containerStyle: {
      backgroundColor: theme.colors.background,
      borderColor: 'lightgray',
      borderRadius: 7,
      borderWidth: 1,
      height: 50,
      marginBottom: 10,
      width: '100%',
    },
    labelStyle: {
      marginTop: -10,
      marginLeft: 10,
      position: 'absolute',
      backgroundColor: theme.colors.background,
      color: theme.colors.textColor,
    },
    inputTextStyle: {
      fontWeight: 'bold',
      fontSize: 18,
      marginVertical: 'auto',
      marginHorizontal: 20,
      textAlignVertical: 'center',
      color: theme.colors.textColor,
    },
    activeColor: {
      color: theme.colors.textColor,
    },
  });

  return styles;
};

export const useDatePickerStyle = () => {
  const Styles = useThemeAwareObject(createStyles);
  return Styles;
};
