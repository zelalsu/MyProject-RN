import {View, Text, TouchableOpacity, TextInput, Keyboard} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '@src/components/UI/Header';
import getStyles from './style';
import {useNavigation, useTheme} from '@react-navigation/native';
import {SimpleList} from '@src/components/UI/ListComponents/SimpleList';
import {TabStackScreenProps} from '@src/navigation/types';
import UserAdd from '@assets/svg/UserAdd.svg';
import {TouchableWithoutFeedback} from 'react-native';
import {DataParams} from './types';
import {SearchBar} from '@src/components/UI/SearchBar';
const a = [
  {
    id: 1,
    time: 'lwöfs',
  },
  {
    id: 2,
    time: 'abc',
  },
];
const flatListData = [
  {
    STOKKODU: 'denemeler',
    STOKADI: 'bb',
    BAKIYE: 'dd',
    SATISFIYATI: 'dfs',
  },
  {
    STOKKODU: 'aaaa',
    STOKADI: 'bb',
    BAKIYE: 'dd',
    SATISFIYATI: 'dfs',
  },
  {
    STOKKODU: 'aa',
    STOKADI: 'bb',
    BAKIYE: 'dd',
    SATISFIYATI: 'dfs',
  },
  {
    STOKKODU: 'aa',
    STOKADI: 'bb',
    BAKIYE: 'dd',
    SATISFIYATI: 'dfs',
  },
  {
    STOKKODU: 'aa',
    STOKADI: 'bb',
    BAKIYE: 'dd',
    SATISFIYATI: 'dfs',
  },
  {
    STOKKODU: 'aa',
    STOKADI: 'bb',
    BAKIYE: 'dd',
    SATISFIYATI: 'dfs',
  },
  {
    STOKKODU: 'aa',
    STOKADI: 'bb',
    BAKIYE: 'dd',
    SATISFIYATI: 'dfs',
  },
  {
    STOKKODU: 'aa',
    STOKADI: 'bb',
    BAKIYE: 'dd',
    SATISFIYATI: 'dfs',
  },
  {
    STOKKODU: 'aa',
    STOKADI: 'bb',
    BAKIYE: 'dd',
    SATISFIYATI: 'dfs',
  },
  {
    STOKKODU: 'aa',
    STOKADI: 'bb',
    BAKIYE: 'dd',
    SATISFIYATI: 'dfs',
  },
  {
    STOKKODU: 'aa',
    STOKADI: 'bb',
    BAKIYE: 'dd',
    SATISFIYATI: 'dfs',
  },
];

const CustomerScreen = ({
  navigation,
}: TabStackScreenProps<'TabNavigator', 'CustomerScreen'>) => {
  const theme = useTheme();
  const styles = React.useMemo(() => getStyles(theme), [theme]);
  const [data, setData] = useState<DataParams[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setData(flatListData);
  }, []);

  const onSearchPress = async searchText => {
    //Offline arama
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: theme.gray[800],
            borderBottomRightRadius: 44,
            borderBottomLeftRadius: 44,
            marginBottom: 10,
          }}>
          <Header
            presentation="back"
            rightOptions={{
              shown: true,
              icon: <UserAdd />,
            }}
            insetTop={true}
            textOptions={{
              shown: true,
              title: 'Müşteriler',
            }}
          />
        </View>
        {/* <View style={styles.textInputContainer}>
          <View style={styles.altTextInput}>
            <Search />
            <TextInput
              value={search}
              onChangeText={setSearch}
              style={styles.textInput}
              placeholderTextColor={theme.gray[500]}
              placeholder={'Ara'}
            />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: theme.primary.main,
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: 23,
              paddingVertical: 10,
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: 'white',
              }}>
              ARA
            </Text>
          </TouchableOpacity>
        </View> */}
        <SearchBar onSearchPress={searchText => onSearchPress(searchText)} />

        <View
          style={{
            flex: 1,
            borderRadius: 12,
            margin: 10,
          }}>
          <SimpleList
            data={data}
            // loading={products.loading.productsLoading}
            listIconName="account"
            listItemFields={(item: {STOKKODU: any; STOKADI: any}) => [
              item.STOKKODU,
              item.STOKADI,
            ]}
            listItemDetailFields={(item: DataParams) => [
              {showField: item.BAKIYE, showFieldName: 'Bakiye'},
              {showField: item.SATISFIYATI, showFieldName: ' , Fiyat'},
            ]}
            listItemOnPress={(item: DataParams) =>
              navigation.navigate('CustomerDetails', {
                selectedCustomer: item,
              })
            } // onEndReached={async () => {
            //   page.current++;
            //   handleProducts();
            // }}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CustomerScreen;
