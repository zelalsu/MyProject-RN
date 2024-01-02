import {View, Text} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/UI/Header';
import {Button} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {setUserInitialState} from '@src/store/slices/user';
import {setRoute} from '@src/store/slices/route';

const MainScreen = () => {
  const dispatch = useDispatch();

  return (
    <>
      <View>
        <Header
          presentation="back"
          insetTop={true}
          textOptions={{
            shown: true,
            title: 'Mainn',
          }}
          rightOptions={{
            shown: true,
          }}
        />
      </View>
      <View style={{backgroundColor: 'red'}}>
        <Button
          onPress={async () => {
            dispatch(setUserInitialState());
            dispatch(setRoute({path: 'AuthNavigator'}));
          }}>
          deneme
        </Button>
      </View>
    </>
  );
};

export default MainScreen;
