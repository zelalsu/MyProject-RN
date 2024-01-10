import {View, Text} from 'react-native';
import React from 'react';
import Header from '@src/components/UI/Header';
import Icon from 'react-native-vector-icons/AntDesign';

const ProductScreen = () => {
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
          title: ' Ürünler',
        }}
      />
    </View>
  );
};

export default ProductScreen;
