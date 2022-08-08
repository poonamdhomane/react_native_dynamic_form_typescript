import React from 'react';
import {StyleSheet} from 'react-native';
import {Theme, useTheme, useThemeAwareObject} from './theme';

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      flex: 1,
      paddingHorizontal: 10,
    },
    containerFull: {
      backgroundColor: theme.colors.background,
      flex: 1,
    },
    containerVCenter: {
      backgroundColor: theme.colors.background,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
    },
    navbar: {
      backgroundColor: theme.colors.backgroundOverlay,
      width: '100%',
    },
    navTitle: {
      color: theme.colors.textColor,
      fontWeight: '600',
      fontSize: 20,
    },
    cardContainer: {
      backgroundColor: theme.colors.backgroundOverlay,
    },
    verticalDivider: {
      width: 1,
      height: '100%',
    },
    background: {
      backgroundColor: theme.colors.background,
    },
    root: {
      flexDirection: 'row',
    },
    inrowSapce: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    inrowEqual: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    inrowAround: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    title: {
      fontSize: 16,
      color: 'white',
      fontWeight: '600', //in future create own component with theses styles
    },
    description: {
      fontSize: 14,
      color: 'white',
      fontWeight: '600',
    },
  });

  return styles;
};

export const useStyle = () => {
  const Styles = useThemeAwareObject(createStyles);

  return Styles;
};

export const useColor = () => {
  const theme = useTheme().theme;

  return theme.colors;
};
