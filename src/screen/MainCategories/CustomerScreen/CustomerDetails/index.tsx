import {View, Text} from 'react-native';
import React from 'react';
import Header from '@src/components/UI/Header';
import {useTheme} from '@react-navigation/native';
import getStyles from './style';
import {RootStackScreenProps} from '@src/navigation/types';

const CustomerDetails = ({route}: RootStackScreenProps<'CustomerDetails'>) => {
  const {selectedCustomer} = route.params;
  const theme = useTheme();

  const style = React.useMemo(() => getStyles(theme), [theme]);
  return (
    <View style={style.container}>
      <Header
        presentation="close"
        // leftOptions={{
        //   shown: true,
        //   icon: <Icon name="back" size={30} color="black" />,
        // }}
        insetTop={true}
        textOptions={{
          shown: true,
          title: 'Müşteri Detayı',
        }}
      />
      <Text>{selectedCustomer.STOKADI}</Text>
    </View>
  );
};

export default CustomerDetails;
