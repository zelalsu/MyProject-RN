import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

// Constant

// Type
import Close from '@assets/svg/Close.svg';
import Back from '@assets/svg/Back.svg';

import {HeaderProps} from './types';

import {headerHeight} from '../../constant/dimension';
import {MyTheme} from '@src/constant/types';
// import {Icon} from 'react-native-paper';

const Header = ({
  leftOptions,
  rightOptions,
  style,
  presentation,
  insetTop,
  textOptions,
}: HeaderProps) => {
  const theme = useTheme();
  const navigation = useNavigation();
  const styles = React.useMemo(() => getStyles(theme), [theme]);

  const insets = useSafeAreaInsets();
  const containerStyle = StyleSheet.flatten(style);

  const leftIconClick: () => void = () =>
    leftOptions?.iconClick ? leftOptions.iconClick?.() : navigation?.goBack();

  const rightIconClick: () => void = () =>
    rightOptions?.iconClick ? rightOptions.iconClick?.() : () => {};

  const marginTop: number = containerStyle?.marginTop
    ? +containerStyle.marginTop
    : 0;
  const paddingTop: number = containerStyle?.paddingTop
    ? insetTop
      ? +containerStyle.paddingTop + insets.top
      : +containerStyle.paddingTop
    : insetTop
    ? insets.top
    : 0;

  const iconOptions: {
    stroke: string;
    strokeWidth: number;
    fill: string;
  } = {
    stroke:
      leftOptions && leftOptions.strokeOptions?.color
        ? leftOptions.strokeOptions.color
        : theme.black,
    strokeWidth:
      leftOptions && leftOptions.strokeOptions?.width
        ? leftOptions.strokeOptions.width
        : 0,
    fill:
      leftOptions && leftOptions.fillOptions?.color
        ? leftOptions.fillOptions.color
        : theme.black,
  };

  const leftShown =
    leftOptions !== undefined
      ? leftOptions.shown !== undefined
        ? leftOptions.shown
        : true
      : true;
  const rightShown = rightOptions && rightOptions.shown;
  const textShown = textOptions && textOptions.shown;

  return (
    <View
      style={[
        styles.container,
        containerStyle,
        {
          marginTop: marginTop,
          paddingTop: paddingTop,
          height: insetTop ? insets.top + headerHeight : headerHeight,
        },
      ]}>
      {leftShown && (
        <TouchableOpacity
          style={[styles.left, leftOptions !== undefined && leftOptions.style]}
          hitSlop={{top: 16, left: 16, right: 16, bottom: 16}}
          activeOpacity={0.7}
          onPress={leftIconClick}>
          {leftOptions?.icon ? (
            leftOptions.icon
          ) : presentation === 'close' ? (
            <Close width={25} height={25} {...iconOptions} />
          ) : (
            <Back {...iconOptions} />
          )}
        </TouchableOpacity>
      )}
      {!textShown && <View style={styles.space} />}
      {textShown && (
        <View style={styles.titleContainer}>
          {!textOptions.component ? (
            <Text style={[textOptions.style, styles.title]}>
              {textOptions?.title}
            </Text>
          ) : (
            textOptions?.component
          )}
        </View>
      )}
      {rightShown && (
        <TouchableOpacity
          style={[
            styles.right,
            rightOptions !== undefined && rightOptions.style,
          ]}
          hitSlop={{top: 16, left: 16, right: 16, bottom: 16}}
          activeOpacity={0.7}
          onPress={rightIconClick}>
          <>{rightOptions && rightOptions.icon}</>
        </TouchableOpacity>
      )}
    </View>
  );
};

const getStyles = (theme: MyTheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.gray[800],
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 10,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    titleContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    left: {
      left: 16,
      zIndex: 1,
      marginRight: -15,
      justifyContent: 'center',
    },
    space: {
      flex: 1,
    },
    right: {
      right: 16,
      zIndex: 1,
      marginLeft: -15,
      justifyContent: 'center',
    },
    title: {
      fontSize: 18,
      lineHeight: 22,
      color: theme.gray[100],
    },
  });

export default Header;
