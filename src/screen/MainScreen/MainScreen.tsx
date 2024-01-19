import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';

import {useShopApiMutation} from '@src/store/api/shop';
import {useAppSelector} from '@src/store';
import {ShopApiParams} from '@src/store/api/types';
import {DrawerStackScreenProps} from '@src/navigation/types';
import {DrawerActions, useTheme} from '@react-navigation/native';
import Logo from '@assets/svg/aruna-deppo.svg';
import Header from '@src/components/UI/Header';
import ListDrawer from '@assets/svg/ListDrawer.svg';
import Customer from '@assets/svg/customer.svg';
import Product1 from '@assets/svg/Product2.svg';
import Shopping from '@assets/svg/shopping.svg';
import Chart from '@assets/svg/Chart.svg';
import {MainStackParams} from '@src/navigation/types';
import getStyles from './style';
import {window} from '@src/constant/dimension';
import {HorizontalDash} from '@src/components/UI/Dash';
const MainScreen = ({
  navigation,
}: DrawerStackScreenProps<'DrawerNavigator', 'MainScreen'>) => {
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

  const categories = [
    {
      id: 1,
      title: 'MÜŞTERİLER',
      divine: 2,
      image: Customer,
    },
    {
      id: 2,
      title: 'ÜRÜNLER',
      divine: 2,
      image: Product1,
    },
    {
      id: 3,
      title: 'RAPORLAR',
      divine: 2,
      image: Chart,
    },
    {
      id: 4,
      title: 'SİPARİŞLER',
      divine: 2,
      image: Shopping,
    },
  ];

  const onNavigation = (id: number) => {
    const navigationMap: {[key: number]: keyof MainStackParams | undefined} = {
      3: 'ReportScreen',
      4: 'OrderScreen',
    };

    const screen = navigationMap[id];
    console.log(screen);

    id === 1 &&
      navigation.navigate('TabNavigator', {
        screen: 'CustomerScreen',
      });
    id === 2 &&
      navigation.navigate('TabNavigator', {
        screen: 'ProductScreen',
      });
    if (screen) {
      navigation.navigate('TabNavigator', {
        screen: 'MainNavigator',
        params: {
          screen: screen,
        },
      });
    }
  };
  const widthHandler = (divine: number | undefined) => {
    return divine ? (window.width - 50) / divine : window.width;
  };
  return (
    <View style={styles.container}>
      <Header
        presentation="back"
        leftOptions={{
          shown: true,
          icon: <ListDrawer />,
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

      {/* {shopItem &&
        shopItem.sbSubeList &&
        shopItem.sbSubeList.map((item, key) => (
          <View key={key} style={styles.shopContainer}>
            <Text>{item.subeAdi}</Text>
          </View>
        ))} */}

      {/* <Button
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
      </Button> */}
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={styles.categoryContainer}>
          {categories.map((item, key) => (
            <TouchableOpacity
              onPress={() => onNavigation(item.id)}
              activeOpacity={0.9}
              key={key}>
              <View
                style={[
                  styles.imageContainer,
                  {
                    width: widthHandler(item.divine),
                  },
                ]}>
                <View style={styles.catalogContainer}>
                  <View
                    style={{
                      flexDirection:
                        item.divine === 1.5 || item.divine === 2
                          ? 'row'
                          : 'column',
                      alignItems: 'baseline',
                    }}>
                    <item.image style={{marginRight: 10}} />
                    <View>
                      <HorizontalDash />
                      <Text style={styles.categoryTitle}>{item.title}</Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default MainScreen;
