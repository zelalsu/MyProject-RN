import {window} from '@src/constant/dimension';
import {MyTheme} from '@src/constant/types';
import {StyleSheet} from 'react-native';

const getStyles = (theme: MyTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.gray[900],
    },
  });

export default getStyles;
