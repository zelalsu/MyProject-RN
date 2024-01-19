import {View, Text} from 'react-native';
import React from 'react';
import Header from '@src/components/UI/Header';
import getStyles from './style';
import {useTheme} from '@react-navigation/native';
const ContactScreen = () => {
  const theme = useTheme();
  const style = React.useMemo(() => getStyles(theme), [theme]);
  return (
    <View style={style.container}>
      <Header
        presentation="back"
        // leftOptions={{
        //   shown: true,
        //   icon: <Icon name="back" size={30} color="black" />,
        // }}
        insetTop={true}
        textOptions={{
          shown: true,
          title: 'İletişim',
        }}
      />
      <View
        style={{
          backgroundColor: theme.black,
          justifyContent: 'center',
          margin: 30,
          alignItems: 'center',
        }}>
        <View style={{backgroundColor: 'red'}}>
          <Text>dslkf</Text>
        </View>
      </View>
    </View>
  );
};

export default ContactScreen;
