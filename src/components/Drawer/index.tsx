import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {useDispatch} from 'react-redux';
import {setUserInitialState} from '@src/store/slices/user';
import {Button} from 'react-native-paper';
import {setRoute} from '@src/store/slices/route';
import {setTheme} from '@src/store/slices/theme';
import {Switch} from 'react-native-switch';
import {useAppSelector} from '@src/store';
import getStyles from './style';
import {DrawerActions, useTheme, useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

const DrawerBar = (props: DrawerContentComponentProps) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const themeMode = useAppSelector(state => state.theme.mode);

  const toggleTheme = (value: boolean) => {
    if (value) {
      dispatch(setTheme({mode: 'dark'}));
    } else {
      dispatch(setTheme({mode: 'light'}));
    }
  };

  const styles = React.useMemo(() => getStyles(theme), [theme]);
  const userInfo = useAppSelector(state => state.user.user);
  const navigation = useNavigation();

  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}>
        <Icon name="close" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          navigation.navigate('DrawerNavigator', {screen: 'ProfileScreen'})
        }>
        <View style={styles.profileContainer}>
          <View style={styles.rowContainer}>
            <View style={{marginLeft: 12}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.userTitle}>
                  {userInfo.firstName.charAt(0).toUpperCase() +
                    userInfo.firstName.slice(1).toLowerCase()}
                </Text>
                <Text style={styles.userTitle}>
                  {userInfo.lastName.charAt(0).toUpperCase() +
                    userInfo.lastName.slice(1).toLowerCase()}
                </Text>
              </View>

              <Text style={styles.userMail}>{userInfo.username}</Text>
            </View>
          </View>
          <Icon name="right" size={16} color="black" />
        </View>
      </TouchableOpacity>
      <View style={styles.rowContainer}>
        <Button
          onPress={async () => {
            dispatch(setUserInitialState());
            dispatch(setRoute({path: 'AuthNavigator'}));
          }}>
          deneme
        </Button>
        <Switch
          value={themeMode === 'dark'}
          onValueChange={toggleTheme}
          circleSize={15}
          circleActiveColor={'red'}
          barHeight={5}
          switchLeftPx={1} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
          switchRightPx={1}
          circleBorderWidth={0}
          switchWidthMultiplier={3}
          backgroundActive={'blue'}
          backgroundInactive={'green'}
          renderActiveText={false}
          renderInActiveText={false}
        />
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerBar;
