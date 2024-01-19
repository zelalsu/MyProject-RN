import {window} from '@src/constant/dimension';
import {StyleSheet} from 'react-native';
import {MyTheme} from '@src/constant/types';

const getStyles = (theme: MyTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.gray[800],
    },
    mainContainer: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    descContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    descMain: {
      width: window.width,

      borderColor: 'white',
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
    },
    arunaMobileSalesLogo: {
      width: 250,
      height: 100,
      resizeMode: 'contain',
      marginBottom: 20,
    },
  });

export default getStyles;
