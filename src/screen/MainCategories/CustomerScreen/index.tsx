import {View, Text} from 'react-native';
import React from 'react';
import Header from '@src/components/UI/Header';
import getStyles from './style';
import {useTheme} from '@react-navigation/native';

const CustomerScreen = () => {
  const theme = useTheme();
  const styles = React.useMemo(() => getStyles(theme), [theme]);
  return (
    <View style={styles.container}>
      <Header
        presentation="back"
        // leftOptions={{
        //   shown: true,
        //   icon: <Icon name="back" size={30} color="black" />,
        // }}
        insetTop={true}
        textOptions={{
          shown: true,
          title: 'Müşterilerim',
        }}
      />
    </View>
  );
};

export default CustomerScreen;
