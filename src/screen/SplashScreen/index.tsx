import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '@src/store';
import {setUserInitialState} from '@src/store/slices/user';
import {setRoute} from '@src/store/slices/route';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import style from './style';
import splash from '../../../assets/image/splash.jpeg';
import {window} from '@src/constant/dimension';
const SplashScreen = () => {
  const storedUserInfo = useAppSelector(state => state.user.user);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  useEffect(() => {
    if (storedUserInfo.tokenString === '') {
      dispatch(setUserInitialState());
    } else {
      setTimeout(() => {
        dispatch(setRoute({path: 'RootNavigator'}));
      }, 3000);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={style.container}>
      <View style={style.mainContainer}>
        <View style={style.descContainer}>
          <View style={style.descMain}>
            <Text style={style.desc1}>Hoşgeldiniz</Text>
            <Text style={style.desc2}>QUALITY AND TRUST</Text>
          </View>
        </View>
        <View>
          <Image
            style={{
              width: 300,
              height: 400,
              borderRadius: 30,
              backgroundColor: 'red',
            }}
            resizeMode="stretch"
            source={splash}
          />
        </View>

        <View style={style.descContainer}>
          <View style={style.descMain}>
            <Text style={style.desc1}>‘master work’</Text>
            <Text style={style.desc2}>QUALITY AND TRUST</Text>
          </View>
          {storedUserInfo.tokenString === '' && (
            <TouchableOpacity
              onPress={() => navigation.navigate('LoginScreen')}
              activeOpacity={0.8}
              style={[
                style.buttonContainer,
                {marginBottom: insets.bottom + 50},
              ]}>
              <Text style={style.button}>Devam Et</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default SplashScreen;
