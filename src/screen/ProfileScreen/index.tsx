import {View, Text} from 'react-native';
import React from 'react';
import Header from '@src/components/UI/Header';
import Icon from 'react-native-vector-icons/AntDesign';
import {DrawerStackScreenProps} from '@src/navigation/types';

const ProfileScreen = ({}: DrawerStackScreenProps<
  'DrawerNavigator',
  'ProfileScreen'
>) => {
  return (
    <View>
      <Header
        presentation="back"
        leftOptions={{
          shown: true,
          icon: <Icon name="back" size={30} color="black" />,
          iconClick: () => {},
        }}
        insetTop={true}
        textOptions={{
          shown: true,
          title: 'Profil',
        }}
      />
    </View>
  );
};

export default ProfileScreen;