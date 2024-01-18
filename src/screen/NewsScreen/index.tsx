import {View, Text} from 'react-native';
import React from 'react';
import Header from '@src/components/UI/Header';

const NewsScreen = () => {
  return (
    <View>
      <Header
        presentation="back"
        // leftOptions={{
        //   shown: true,
        //   icon: <Icon name="back" size={30} color="black" />,
        // }}
        insetTop={true}
        textOptions={{
          shown: true,
          title: 'NewsScreen',
        }}
      />
    </View>
  );
};

export default NewsScreen;
