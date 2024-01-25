import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const CustomCheckbox = ({checked, onChange}) => {
  return (
    <TouchableOpacity
      onPress={() => onChange(!checked)}
      style={{
        width: 20,
        height: 20,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: checked ? 'red' : 'transparent',
      }}>
      {checked && <Text style={{color: 'white', fontSize: 10}}>✓</Text>}
    </TouchableOpacity>
  );
};

export default CustomCheckbox;
