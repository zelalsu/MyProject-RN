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
    },
    descMain: {
      width: window.width,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'white',
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
    },
    buttonContainer: {
      backgroundColor: theme.primary.main,
      width: window.width - 34,
      alignItems: 'center',
      borderRadius: 8,
      paddingVertical: 16,
      marginTop: 40,
    },
    button: {
      color: 'white',

      fontSize: 14,
      letterSpacing: 0.4,
    },
    desc1: {
      fontSize: 20,
      letterSpacing: 0.4,
    },
    desc2: {
      color: 'gray',
      fontSize: 20,

      letterSpacing: 0.4,
    },
  });

export default getStyles;
