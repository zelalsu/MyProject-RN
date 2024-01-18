import React, {useState} from 'react';
import {View} from 'react-native';

import Header from '@src/components/UI/Header';

const DenemeScreen = () => {
  // const onToggleComplete = (id: number) => {
  //   const updatedData = data.map(item =>
  //     item.id === id ? {...item, completed: !item.completed} : item,
  //   );
  //   setData(updatedData);
  // };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
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
