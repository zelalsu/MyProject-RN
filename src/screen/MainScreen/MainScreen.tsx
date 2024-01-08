import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../components/UI/Header';
import {Button} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {setUserInitialState} from '@src/store/slices/user';
import {setRoute} from '@src/store/slices/route';
import {useLazyUserListQuery} from '@src/store/api/userList';
import {useShopApiMutation} from '@src/store/api/shop';
import {useAppSelector} from '@src/store';
import {ShopApiResponseParams} from '@src/store/api/types';
import {DrawerStackScreenProps} from '@src/navigation/types';
import {DrawerActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

const MainScreen = ({
  navigation,
}: DrawerStackScreenProps<'DrawerNavigator', 'MainScreen'>) => {
  const dispatch = useDispatch();
  const [userListQuery] = useLazyUserListQuery();

  const [newsData, setNewsData] = useState([]); // Changed to singular item
  const [shopList] = useShopApiMutation();
  const storedUserInfo = useAppSelector(state => state.user.user);
  const [shopItem, setShopItem] = useState<ShopApiResponseParams>([]);

  useEffect(() => {
    userListQuery().then(res => {
      if (res) {
        setNewsData(res);
      } else {
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        shopList({
          userName_0: storedUserInfo.username,
        }).then(res => {
          setShopItem(res.data);
        });
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
            title: 'Ana sayfa',
          }}
        />
      </View>
      {shopItem &&
        shopItem.sbSubeList &&
        shopItem.sbSubeList.map((item, key) => (
          <View key={key} style={{backgroundColor: 'pink'}}>
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
