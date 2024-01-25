import {View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '@src/store';
import {setUserInitialState} from '@src/store/slices/user';
import {setRoute} from '@src/store/slices/route';
import {useNavigation, useTheme} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {window} from '@src/constant/dimension';
import getStyles from './style';

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
      setTimeout(() => {
        navigation.navigate('LoginScreen');
      }, 3000);
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
        <View style={[style.descContainer]}>
          <Image
            style={style.arunaMobileSalesLogo}
            source={require('@assets/image/aruna-brand.png')}
          />
        </View>
      </View>
    </View>
  );
};

export default SplashScreen;
