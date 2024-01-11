import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {batch, useDispatch} from 'react-redux';
import {setUserInitialState} from '@src/store/slices/user';
import {Button} from 'react-native-paper';
import {setRoute} from '@src/store/slices/route';
import {setTheme} from '@src/store/slices/theme';
import {Switch} from 'react-native-switch';
import {useAppSelector} from '@src/store';
import getStyles from './style';
import {DrawerActions, useTheme, useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useTranslation} from 'react-i18next';
import {LangugeSliceParams} from '@src/store/types';
import i18n from '@src/utils/i18n';
import {setLanguage} from '@src/store/slices/language';
import {window} from '@src/constant/dimension';

let languages = [
  {
    id: '1',
    code: 'tr',
  },
  {
    id: '2',
    code: 'en',
  },
];

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

  const languageHandler = (item: LangugeSliceParams) => {
    i18n.changeLanguage(item.code);
    dispatch(setLanguage(item));
  };

  const styles = React.useMemo(() => getStyles(theme), [theme]);
  const userInfo = useAppSelector(state => state.user.user);
  const navigation = useNavigation();
  const {t} = useTranslation('drawer');
  const activeLanguage = useAppSelector(state => state.language);

  const a = [
    {
      id: 1,
      title: t('CONTACT'),
      desc: t('CONTACT_DESC'),
    },
  ];
  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      <View style={{}}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}>
          <Icon name="close" size={24} color="black" />
        </TouchableOpacity>

        <View>
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
          <View
            style={{
              height: window.height / 2,
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                marginHorizontal: 10,
                gap: 10,
              }}>
              {languages.map((item, index) => (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => languageHandler(item)}
                  key={item.id}>
                  <Text
                    style={{
                      color:
                        activeLanguage.id === item.id
                          ? theme.primary.dark
                          : theme.gray[100],
                      fontSize: 17,
                    }}>
                    {item.code.toUpperCase()}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <View>
              {a.map((item, index) => (
                <TouchableOpacity
                  activeOpacity={0.9}
                  key={index}
                  style={styles.profileContainer}>
                  <View style={styles.rowContainer}>
                    <View>
                      <Text style={styles.userTitle}>{item.title}</Text>
                      <Text style={styles.userMail}>{item.desc}</Text>
                    </View>
                  </View>
                  {/* <TouchableOpacity activeOpacity={0.9}>
            <RightRed />
          </TouchableOpacity> */}
                </TouchableOpacity>
              ))}
            </View>

            <View
              style={{
                marginTop: 100,
              }}>
              <View style={{marginBottom: 20}}>
                <Switch
                  value={themeMode === 'dark'}
                  onValueChange={toggleTheme}
                  circleSize={15}
                  circleActiveColor={theme.primary.main}
                  barHeight={5}
                  switchLeftPx={1} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
                  switchRightPx={1}
                  circleBorderWidth={0}
                  switchWidthMultiplier={3}
                  backgroundActive={theme.primary.main}
                  backgroundInactive={theme.gray[700]}
                  renderActiveText={false}
                  renderInActiveText={false}
                />
              </View>
            </View>
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.9}
          onPress={async () => {
            batch(() => {
              dispatch(setUserInitialState());

              dispatch(setRoute({path: 'AuthNavigator'}));
            });
          }}>
          <Text style={styles.logOut}> {t('LOG_OUT')} </Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerBar;
