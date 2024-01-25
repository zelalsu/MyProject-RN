import {window} from '@src/constant/dimension';
import {MyTheme} from '@src/constant/types';
import {StyleSheet} from 'react-native';

const getStyles = (theme: MyTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.gray[900],
    },
    userInfoContainer: {
      marginVertical: 40,
      marginHorizontal: 20,
      justifyContent: 'center',
    },
    userInfo: {
      backgroundColor: theme.gray[700],
      borderRadius: 16,
      padding: 10,
      paddingVertical: 20,
    },

    inputText: {
      height: window.height / 4 - 30,
      justifyContent: 'space-between',
      marginHorizontal: 16,
      marginVertical: 30,
    },
    title: {
      backgroundColor: theme.gray[900],
      marginVertical: 10,
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
