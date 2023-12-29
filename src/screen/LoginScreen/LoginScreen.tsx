import {View, Text, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import style from './style';
import {RootStackScreenProps} from '../../navigation/types';
import {useLazyLoginQuery} from '../../store/api/login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useApiResponse from '../../hooks/useApiResponse';
import {LoginApiResponseParams} from '../../store/Api/types';
import {batch, useDispatch} from 'react-redux';
import {setUserInfo} from '../../store/slices/user';

const LoginScreen = ({navigation}: RootStackScreenProps<'LoginScreen'>) => {
  const [login, setLogin] = useState({
    username: '',
    password: '',
  });
  const [loginApiTrigger, {isSuccess}] = useLazyLoginQuery();

  const dispatch = useDispatch();

  const apiResponse = useApiResponse({
    successHandler: (v: LoginApiResponseParams) => {
      const userInfo = {username: v.user.username, user: v.user};
      console.log(userInfo);

      // const updatedUserSessionInfo =
      //   ...userSessionInfo,
      //   token: v.data.token,
      // };
      dispatch(setUserInfo(userInfo));
      // dispatch(setUserSessionInfo(updatedUserSessionInfo));
      // dispatch(setUserRemember(rememberMe));
      // dispatch(setRoute({ path: 'RootNavigator' }));
    },

    errorHandler: (error: any) => {
      // console.log(error + 'message');
    },
  });
  const loginHandler = () => {
    if (login.username !== '' && login.password !== '') {
      loginApiTrigger({
        username: login.username.toLowerCase(),
        password: login.password,
      }).then(res => {
        // apiResponse.apiResponseHandler({res});
        if (isSuccess) {
          Alert.alert('Giriş yaptınız');
          navigation.navigate('MainScreen');
          apiResponse.apiResponseHandler({res});
        } else {
          Alert.alert(res?.error?.data.message);
        }
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
            onChangeText={value => {
              setLogin({...login, password: value});
            }}
          />
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
