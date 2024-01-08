import {tabBarHeight} from '@src/constant/dimension';
import {StyleSheet} from 'react-native/';
import {MyTheme} from '@src/constants/types';

const getStyles = (theme: MyTheme) =>
  StyleSheet.create({
    mainContainer: {
      flexDirection: 'row',
      backgroundColor: theme.gray[800],
      height: tabBarHeight,
    },
    container: {
      flex: 1,
    },
    tabBarContainer: {
      alignItems: 'center',
      marginTop: 17,
    },
    text: {
      color: theme.gray[500],
      fontSize: 12,
      marginTop: 4,
    },
    mainNavigatorIcon: {
      borderWidth: 3,
      backgroundColor: theme.gray[900],
      borderColor: theme.gray[700],
      padding: 10,
      borderRadius: 39,
    },
  });

export default getStyles;
