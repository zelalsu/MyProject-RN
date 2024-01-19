import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TextInput} from 'react-native-paper';

import {useLazyLoginQuery} from '../../store/api/login';
import useApiResponse from '../../hooks/useApiResponse';
import {LoginApiResponseParams} from '../../store/Api/types';
import {useDispatch} from 'react-redux';
import {setUserInfo} from '../../store/slices/user';
import {setRoute} from '../../store/slices/route';
import {useAppSelector} from '../../store';
import getStyles from './style';

import {useTheme} from '@react-navigation/native';
import Logo from '@assets/svg/aruna-deppo.svg';
import CustomButton from '@src/components/UI/CustomBottom';
import Icon from 'react-native-vector-icons/Fontisto';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
const LoginScreen = () => {
  const [login, setLogin] = useState({
    username: 'utku.utkan@arunayazilim.com',
    password: 'Arn2014.,',
  });
  const storedUserInfo = useAppSelector(state => state.user.user);
  const [loginApiTrigger] = useLazyLoginQuery();
  const [loading, setLoading] = useState(false); // Add loading state
  const dispatch = useDispatch();
  const theme = useTheme();

  const style = React.useMemo(() => getStyles(theme), [theme]);

  useEffect(() => {
    // Önceki oturum bilgilerini kontrol et
    if (storedUserInfo && storedUserInfo.tokenString) {
      // Geçerli bir token ve kullanıcı bilgisi varsa, oturumu açmış kabul et
      dispatch(setRoute({path: 'RootNavigator'}));
    }
  }, []);

  const apiResponse = useApiResponse({
    successHandler: (v: LoginApiResponseParams) => {
      setLoading(false); // Set loading to false on success

      const userInfo = {username: v.username, user: v};
      dispatch(setUserInfo(userInfo.user));
      dispatch(setRoute({path: 'RootNavigator'}));
    },

    errorHandler: (error: any) => {
      setLoading(false); // Set loading to false on error

      console.log(error.data.message);
    },
  });

  const loginHandler = () => {
    if (login.username !== '' && login.password !== '') {
      setLoading(true); // Set loading to true before making the API call

      loginApiTrigger({
        username: login.username.toLowerCase(),
        password: login.password,
      }).then(res => {
        apiResponse.apiResponseHandler({res});
      });
    } else {
      Alert.alert('Lütfen boş bırakmayınız');
    }
  };

  const insets = useSafeAreaInsets();
  const [rememberMe, setRememberMe] = useState(false);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={style.container}>
        <View style={[{marginTop: insets.top}]}>
          <View style={style.descMain}>
            <Image
              style={style.arunaMobileSalesLogo}
              source={require('@assets/image/aruna-brand.png')}
            />
          </View>
        </View>

        <View style={{flex: 1, justifyContent: 'center', marginHorizontal: 16}}>
          <View style={style.inputContainer}>
            <View style={style.inputText}>
              <TextInput
                label="E-Posta"
                value={login.username}
                mode="flat"
                contentStyle={style.label}
                style={style.title}
                onChangeText={value => {
                  setLogin({...login, username: value});
                }}
              />
              <TextInput
                label="Şifre"
                value={login.password}
                contentStyle={style.label}
                mode="flat"
                style={style.title}
                onChangeText={value => {
                  setLogin({...login, password: value});
                }}
              />

              <Modal
                transparent={true}
                animationType="fade"
                visible={loading}
                onRequestClose={() => setLoading(false)}>
                <View style={style.loadingOverlay}>
                  <ActivityIndicator size="large" color="white" />
                </View>
              </Modal>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity
                  style={{flexDirection: 'row', alignItems: 'center', gap: 7}}
                  activeOpacity={0.8}
                  onPress={() => setRememberMe(!rememberMe)}>
                  {rememberMe ? (
                    <Icon
                      name="checkbox-active"
                      size={18}
                      color={theme.gray[100]}
                    />
                  ) : (
                    <Icon name="checkbox-passive" size={18} color="gray" />
                  )}

                  <Text style={style.label}>Beni Hatırla</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={style.label}>Şifremi Unuttum</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {apiResponse.modalView()}

          <CustomButton label="Giriş Yap" onPress={loginHandler} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
