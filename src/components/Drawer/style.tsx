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
    toolKitContainer: {
      backgroundColor: theme.gray[900],
      borderBottomRightRadius: 12,
      borderTopRightRadius: 12,
      borderTopLeftRadius: 40,
      borderBottomLeftRadius: 40,
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 28,
      padding: 6,
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
    toolKitTitle: {
      color: theme.gray[100],
      fontSize: 12,
    },
    toolKitContainer1: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    toolKitWrapper: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
    },
    quantity: {
      marginTop: 3,
      fontSize: 12,
      color: theme.gray[500],
    },
    price: {
      fontSize: 12,
      color: theme.primary.main,
    },
    followIconContainer: {
      marginTop: 30,
      marginHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 20,
    },
    icon: {
      marginRight: 24,
    },
    logOut: {
      fontSize: 14,
      color: theme.primary.main,
    },
  });

export default getStyles;
