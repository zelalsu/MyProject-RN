import {StyleSheet} from 'react-native';
import {MyTheme} from '@src/constant/types';

const getStyles = (theme: MyTheme) =>
  StyleSheet.create({
    shopContainer: {
      backgroundColor: theme.primary.main,
    },
  });

export default getStyles;
