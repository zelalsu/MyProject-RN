import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '@src/components/UI/Header';
import RightRed from '@assets/svg/RightRed.svg';
import {useNavigation, useTheme} from '@react-navigation/native';
import {MainStackParams} from '@src/navigation/types';
import getStyles from './style';
import {window} from '@src/constant/dimension';
const ReportScreen = () => {
  const theme = useTheme();

  return (
    <View>
      <Header
        presentation="back"
        insetTop={true}
        textOptions={{
          shown: true,
          title: 'Raporlar ',
        }}
      />
    </View>
  );
};

export default ReportScreen;
