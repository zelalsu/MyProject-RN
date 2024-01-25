import {View, ActivityIndicator} from 'react-native';
import React from 'react';

export const LoadingScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <ActivityIndicator />
    </View>
  );
};
