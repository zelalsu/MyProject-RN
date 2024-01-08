import {View, Text} from 'react-native';
import React from 'react';
import Header from '@src/components/UI/Header';
import Icon from 'react-native-vector-icons/AntDesign';
const BranchScreen = ({navigation}) => {
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
          title: 'Sayfa 1',
        }}
      />
    </View>
  );
};

export default BranchScreen;
