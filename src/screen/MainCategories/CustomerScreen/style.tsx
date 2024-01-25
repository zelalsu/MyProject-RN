import {StyleSheet} from 'react-native';
import {MyTheme} from '@src/constant/types';

const getStyles = (theme: MyTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.white,
    },
    shopContainer: {
      backgroundColor: theme.primary.main,
    },
    categoryContainer: {
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 16,
    },
    imageContainer: {
      borderBottomWidth: 8,
      borderBottomColor: theme.white,
      backgroundColor: theme.gray[800],
      borderRadius: 20,
      marginTop: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 2,
    },
    catalogContainer: {
      height: 100,
      justifyContent: 'center',
      marginLeft: 16,
    },
    categoryTitle: {
      color: theme.gray[100],
      fontSize: 14,
      fontWeight: 'bold',
    },
    countTitle: {
      color: theme.gray[500],
      fontSize: 10,
    },
    textInputContainer: {
      flexDirection: 'row',
      gap: 10,
      alignItems: 'center',
      marginHorizontal: 16,
      height: 44,
    },
    textInput: {
      color: theme.gray[100],
      marginLeft: 7,
    },
    altTextInput: {
      flexGrow: 1,
      borderWidth: 1,
      borderRadius: 10,
      backgroundColor: theme.gray[900],
      borderColor: theme.gray[700],
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

export default getStyles;
