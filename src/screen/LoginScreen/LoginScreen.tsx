import {View, Text, Alert, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import style from './style';
import {useLazyLoginQuery} from '../../store/api/login';
import useApiResponse from '../../hooks/useApiResponse';
import {LoginApiResponseParams} from '../../store/Api/types';
import {useDispatch} from 'react-redux';
import {setUserInfo} from '../../store/slices/user';
import {setRoute} from '../../store/slices/route';
import {useAppSelector} from '../../store';

const LoginScreen = () => {
  const [login, setLogin] = useState({
    username: 'utku.utkan@arunayazilim.com',
    password: 'Arn2014.,',
  });
  const storedUserInfo = useAppSelector(state => state.user.user);

  useEffect(() => {
    // Önceki oturum bilgilerini kontrol et
    if (storedUserInfo && storedUserInfo.tokenString) {
      // Geçerli bir token ve kullanıcı bilgisi varsa, oturumu açmış kabul et
      dispatch(setRoute({path: 'RootNavigator'}));
    }
  }, []);
  const [loginApiTrigger] = useLazyLoginQuery();

  const dispatch = useDispatch();

  const apiResponse = useApiResponse({
    successHandler: (v: LoginApiResponseParams) => {
      const userInfo = {username: v.username, user: v};
      dispatch(setUserInfo(userInfo.user));
      dispatch(setRoute({path: 'RootNavigator'}));
    },

    errorHandler: (error: any) => {
      console.log(error.data.message);
    },
  });

  const loginHandler = () => {
    if (login.username !== '' && login.password !== '') {
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
  return (
    <View style={style.container}>
      <Text style={style.title}>Hoşgeldiniz</Text>
      <View style={style.inputContainer}>
        <View style={style.inputText}>
          <TextInput
            style={{marginBottom: 5}}
            label="Email"
            value={login.username}
            mode="outlined"
            onChangeText={value => {
              setLogin({...login, username: value});
            }}
          />
          <TextInput
            label="Password"
            value={login.password}
            mode="outlined"
            right={
              <TouchableOpacity
                onPress={() => setLogin({...login, password: ''})}>
                <Text style={{color: 'red'}}>sdlkf</Text>
              </TouchableOpacity>
            }
            onChangeText={value => {
              setLogin({...login, password: value});
            }}
          />

          {apiResponse.modalView()}
          <View style={{marginVertical: 20}}>
            <Button mode="contained" onPress={loginHandler}>
              Giriş yap
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
