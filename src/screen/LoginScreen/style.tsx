import {window} from '@src/constant/dimension';
import {MyTheme} from '@src/constant/types';
import {StyleSheet} from 'react-native';

const getStyles = (theme: MyTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.gray[800],
    },
    descContainer: {
      flex: 1,
    },
    descMain: {
      width: window.width,
      alignItems: 'center',
      borderColor: 'white',
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
    },
    arunaMobileSalesLogo: {
      width: 200,
      height: 100,
      resizeMode: 'contain',
    },

    inputContainer: {
      backgroundColor: theme.white,
      borderRadius: 30,
    },
    inputText: {
      height: window.height / 4 - 30,
      justifyContent: 'space-between',
      marginHorizontal: 16,
      marginVertical: 30,
    },
    title: {
      backgroundColor: theme.gray[800],
    },
    label: {
      color: theme.gray[200],
    },

    loadingOverlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent black background
    },
  });

export default getStyles;
