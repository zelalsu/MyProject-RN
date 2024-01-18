import {View, Text} from 'react-native';
import React from 'react';
import Header from '@src/components/UI/Header';

const ProductScreen = () => {
  return (
    <View>
      <Header
        presentation="back"
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
