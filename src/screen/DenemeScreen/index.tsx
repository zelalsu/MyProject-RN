import {View, Text} from 'react-native';
import React from 'react';
import Header from '@src/components/UI/Header';
import Icon from 'react-native-vector-icons/AntDesign';
const DenemeScreen = () => {
  return (
    <View>
      <Header
        presentation="back"
        insetTop={true}
        textOptions={{
          shown: true,
          title: 'Deneme',
        }}
      />
    </View>
  );
};

export default DenemeScreen;
