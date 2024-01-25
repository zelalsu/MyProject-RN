import {View, ActivityIndicator} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const RenderFooter = props => {
  return (
    <View style={{height: 50, justifyContent: 'center', alignItems: 'center'}}>
      {props.loading ? (
        <ActivityIndicator />
      ) : (
        <MaterialCommunityIcons
          name="checkbox-marked-circle-outline"
          size={30}
          color={'#28344C'}
        />
      )}
    </View>
  );
};
