import {View} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import {StyleSheet} from 'react-native/';
export const HorizontalDash = () => {
  const theme = useTheme();
  return (
    <View
      style={[
        styles.horizontal,
        {
          backgroundColor: theme.primary.main,
        },
      ]}
    />
  );
};

export const VerticalDash = () => {
  const theme = useTheme();
  return (
    <View
      style={[
        styles.verticalDash,
        {
          backgroundColor: theme.primary.main,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  horizontal: {
    width: 4,
    height: 2,
    marginVertical: 10,
    borderRadius: 21,
    opacity: 0.5,
  },
  verticalDash: {
    width: 2,
    height: 4,
    marginHorizontal: 10,
    opacity: 0.5,
    borderRadius: 21,
  },
});
