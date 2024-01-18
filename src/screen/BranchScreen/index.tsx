import {View, Text} from 'react-native';
import React from 'react';
import Header from '@src/components/UI/Header';
const BranchScreen = () => {
  return (
    <View>
      <Header
        presentation="back"
        insetTop={true}
        textOptions={{
          shown: true,
          title: 'Bracnh ',
        }}
      />
    </View>
  );
};

export default BranchScreen;
