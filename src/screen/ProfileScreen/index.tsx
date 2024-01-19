import {View, Keyboard, TouchableWithoutFeedback} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '@src/components/UI/Header';
import {DrawerStackScreenProps} from '@src/navigation/types';
import {useAppSelector} from '@src/store';
import getStyles from './style';
import {useIsFocused, useTheme} from '@react-navigation/native';
import {TextInput} from 'react-native-paper';
import CustomButton from '@src/components/UI/CustomBottom';

const ProfileScreen = ({}: DrawerStackScreenProps<
  'DrawerNavigator',
  'ProfileScreen'
>) => {
  const userInfo = useAppSelector(state => state.user.user);

  const theme = useTheme();
  const style = React.useMemo(() => getStyles(theme), [theme]);

  const [userDetails, setUserDetails] = useState({
    firstName: userInfo.firstName,
    lastName: userInfo.lastName,
    username: userInfo.username,
    phoneNumber: '05469798730',
  });

  const isfocused = useIsFocused();

  const onInputChange = (field: string, value: string | Date) => {
    setUserDetails(prevDetails => {
      let updatedDetails = {
        ...prevDetails,
        [field]: value,
      };
      return updatedDetails;
    });
  };

  const onSave = () => {
    // userInfo içindeki değeri başka bir yerde kullanmak üzere sakla
    const savedUserInfo = userDetails;
    setUserDetails(userDetails);
    // Burada başka bir yerde kullanabilir veya kaydedebilirsiniz
    console.log('Kaydedilen Veri:', savedUserInfo);
    // Eğer başka bir kaydetme işlemi yapmak istiyorsanız burada yapabilirsiniz
    // Örneğin: dispatch({ type: 'SAVE_USER_INFO', payload: savedUserInfo });
  };

  useEffect(() => {
    if (isfocused) {
      setUserDetails({
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        username: userInfo.username,
        phoneNumber: '05469798730',
      });
    }
  }, [isfocused]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={style.container}>
        <Header
          presentation="back"
          insetTop={true}
          textOptions={{
            shown: true,
            title: 'Profil',
          }}
        />

        <View style={style.userInfoContainer}>
          <View style={style.userInfo}>
            <TextInput
              mode="flat"
              label="E-posta"
              contentStyle={style.label}
              value={userDetails.username}
              style={style.title}
            />
            <TextInput
              label="İsim"
              value={userDetails.firstName}
              mode="flat"
              contentStyle={style.label}
              style={style.title}
              onChangeText={value => onInputChange('firstName', value)}
            />
            <TextInput
              contentStyle={style.label}
              label="Soyad"
              mode="flat"
              value={userDetails.lastName}
              style={style.title}
              onChangeText={value => onInputChange('lastName', value)}
            />
            <TextInput
              contentStyle={style.label}
              label="Telefon Numarası"
              mode="flat"
              value={userDetails.phoneNumber}
              style={style.title}
            />
          </View>
          <CustomButton label="Kaydet" onPress={onSave} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProfileScreen;
