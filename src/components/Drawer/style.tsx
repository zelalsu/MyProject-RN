import {StyleSheet} from 'react-native';
import {MyTheme} from '@src/constant/types';

const getStyles = (theme: MyTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.gray[800],
      borderBottomRightRadius: 50,
      paddingHorizontal: 16,
    },
    profileContainer: {
      marginTop: 10,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      backgroundColor: theme.gray[700],
      borderRadius: 20,
      borderWidth: 2,
      borderColor: theme.white,
      paddingVertical: 13,
      paddingHorizontal: 16,
    },
    userTitle: {
      fontSize: 14,
      marginRight: 3,
      color: theme.gray[100],
    },
    userMail: {
      fontSize: 10,
      color: theme.gray[500],
    },

    rowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    verticalLine: {
      height: 27,
      width: 1,
      backgroundColor: 'gray',
      marginHorizontal: 14,
    },

    logOut: {
      fontSize: 14,
      color: theme.primary.main,
    },
  });

export default getStyles;
