import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../components/UI/Header';
import {Button} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {useShopApiMutation} from '@src/store/api/shop';
import {useAppSelector} from '@src/store';
import {ShopApiParams, ShopApiResponseParams} from '@src/store/api/types';
import {DrawerStackScreenProps} from '@src/navigation/types';
import {DrawerActions, useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import Logo from '@assets/svg/aruna-deppo.svg';
import getStyles from './style';

const MainScreen = ({
  navigation,
}: DrawerStackScreenProps<'DrawerNavigator', 'MainScreen'>) => {
  const dispatch = useDispatch();
  // const [userListQuery] = useLazyUserListQuery();

  const [shopList] = useShopApiMutation();
  const storedUserInfo = useAppSelector(state => state.user.user);
  const [shopItem, setShopItem] = useState<ShopApiParams>();
  const theme = useTheme();
  const styles = React.useMemo(() => getStyles(theme), [theme]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await shopList({
          userName_0: storedUserInfo.username,
        });

        if ('data' in res) {
          // Success case
          setShopItem(res.data);
        } else {
          // Error case
          console.error('Error during API call:', res.error);
        }
      } catch (error) {
        console.error('Error during API call:', error);
      }
    };

    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <View>
        <Header
          presentation="back"
          leftOptions={{
            shown: true,
            icon: <Icon name="bars" size={30} color="black" />,
            iconClick: () => {
              navigation.dispatch(DrawerActions.toggleDrawer());
            },
          }}
          insetTop={true}
          textOptions={{
            shown: true,
            component: <Logo width={100} height={40} />,
          }}
        />
      </View>
      {shopItem &&
        shopItem.sbSubeList &&
        shopItem.sbSubeList.map((item, key) => (
          <View key={key} style={styles.shopContainer}>
            <Text>{item.subeAdi}</Text>
          </View>
        ))}

      <Button
        onPress={() =>
          navigation.navigate('TabNavigator', {
            screen: 'MainNavigator',
            params: {
              screen: 'DenemeScreen',
            },
          })
        }>
        deneme
      </Button>
      <Button
        onPress={() =>
          navigation.navigate('TabNavigator', {
            screen: 'MainNavigator',
            params: {
              screen: 'NewScreen',
            },
          })
        }>
        NewsScreen
      </Button>
    </>
  );
};

export default MainScreen;
