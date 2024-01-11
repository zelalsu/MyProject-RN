import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
} from 'react-native';
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
  const [loading, setLoading] = useState(false); // Add loading state

  const dispatch = useDispatch();

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
          <Modal
            transparent={true}
            animationType="fade"
            visible={loading}
            onRequestClose={() => setLoading(false)}>
            <View style={style.loadingOverlay}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          </Modal>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
