import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

import Header from '@src/components/UI/Header';
import route from '@src/store/slices/route';

const a = [
  {
    id: 1,
    time: 'lwöfs',
  },
  {
    id: 2,
    time: 'abc',
  },
];
const DenemeScreen = ({route}) => {
  const {item} = route.params;
  // const onToggleComplete = (id: number) => {
  //   const updatedData = data.map(item =>
  //     item.id === id ? {...item, completed: !item.completed} : item,
  //   );
  //   setData(updatedData);
  // };

  // useEffect(() => {
  //   // id'ye eşit olan nesneyi bul ve state'e kaydet
  //   const found = a.find(item => item.id === id);
  //   setFoundItem(found);
  // }, [id]); // Bu useEffect id değiştiğinde çalışacak şekilde ayarlandı

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

      <View>
        <Text>ID: {item.id}</Text>
        <Text>Time: {item.time}</Text>
      </View>
    </View>
  );
};

export default DenemeScreen;
