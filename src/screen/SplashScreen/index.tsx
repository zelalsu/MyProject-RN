import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '@src/store';
import {setUserInitialState} from '@src/store/slices/user';
import {setRoute} from '@src/store/slices/route';
import {useNavigation, useTheme} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import style from './style';
import splash from '../../../assets/image/splash.jpeg';
import {window} from '@src/constant/dimension';
import getStyles from './style';
import Logo from '@assets/svg/aruna-deppo.svg';
import CustomButton from '@src/components/UI/CustomBottom';

const SplashScreen = () => {
  const storedUserInfo = useAppSelector(state => state.user.user);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  const style = React.useMemo(() => getStyles(theme), [theme]);

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
        <View style={[style.descContainer, {marginTop: insets.top}]}>
          <View style={style.descMain}>
            <Logo width={150} height={100} />
          </View>
        </View>
        <View>
          <Image
            style={{
              width: 300,
              height: 400,
              borderRadius: 30,
            }}
            resizeMode="stretch"
            source={splash}
          />
        </View>

        <View style={style.descContainer}>
          {storedUserInfo && storedUserInfo.tokenString === '' && (
            <CustomButton
              label="Devam Et"
              onPress={() => navigation.navigate('LoginScreen')}
              activeOpacity={0.8}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default SplashScreen;
