import React from 'react';
import {StyleSheet} from 'react-native';
import {Theme, useTheme, useThemeAwareObject} from '../../support/theme';
const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      flex: 1,
    },
    background: {
      backgroundColor: theme.colors.background,
    },
    input: {
      // color: theme.colors.primary,
      fontSize: theme.fonts.fontSize,
    },
    textFont: {
      fontFamily: theme.fonts.font,
    },
    buttonStyle: {
      alignSelf: 'center',
      justifyContent: 'flex-end',
      borderColor: '#fff',
      borderRadius: 6,
      marginTop: 20,
      marginBottom: 50,
      height: 40,
      width: '100%',
      backgroundColor: theme.colors.primary,
      fontFamily: theme.fonts.font,
    },
  });

  return styles;
};

export const useFormStyle = () => {
  const Styles = useThemeAwareObject(createStyles);

  return Styles;
};

export const useFormColor = () => {
  const theme = useTheme().theme;

  return theme.colors;
};
