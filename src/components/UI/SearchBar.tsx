import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState, useCallback} from 'react';
import {TextInput} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import useDidMountEffect from '../../hooks/useDidMountEffect';
import {
  useNavigation,
  useRoute,
  useFocusEffect,
  useTheme,
} from '@react-navigation/native';
import {MyTheme} from '@src/constant/types';

export const slugify = text => {
  let trMap = {
    '\u00E7': 'c', // ç
    '\u00C7': 'c', // Ç
    '\u011F': 'g', // ğ
    '\u011E': 'g', // Ğ
    '\u015F': 's', // ş
    '\u015E': 's', // Ş
    '\u00FC': 'u', // ü
    '\u00DC': 'u', // Ü
    '\u0131': 'i', // ı
    '\u0130': 'i', // İ
    '\u00F6': 'o', // ö
    '\u00D6': 'o', // Ö
  };

  for (let key in trMap) {
    text = text.replace(new RegExp(key, 'g'), trMap[key]);
  }
  return text
    .trim()
    .replace(/[^-a-zA-Z0-9\s]+/gi, '')
    .replace(/\s/gi, '-')
    .replace(/-+/gi, '-')
    .toLowerCase();
};

export const SearchBar = props => {
  const [searchText, setSearchText] = useState('');
  const [clearButtonVisible, setClearButtonVisible] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const theme = useTheme();
  const styles = React.useMemo(() => getStyles(theme), [theme]);

  // const normalizeTurkish = text => {
  //   const turkishMap = {
  //     ş: 'ş',
  //     Ş: 'Ş',
  //     ı: 'i',
  //     i: 'İ',
  //     ğ: 'ğ',
  //     Ğ: 'Ğ',
  //     ü: 'ü',
  //     Ü: 'Ü',
  //     ö: 'ö',
  //     Ö: 'Ö',
  //     ç: 'ç',
  //     Ç: 'Ç',
  //   };

  //   return text.replace(/[şŞıiğĞüÜöÖçÇ]/g, match => turkishMap[match]);
  // };

  // const normalizedSearchText = slugify(searchText);
  const normalizedSearchText = searchText;

  useFocusEffect(
    useCallback(() => {
      // Camera component'inden barkod geldi ise
      if (route.params?.barcode) {
        // Textinput'a yazdır.
        setSearchText(route.params.barcode);
        // Arama yap
        props.onSearchPress && props.onSearchPress(route.params.barcode);
        // Barcode param resetle
        navigation.setParams({barcode: null});
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [route.params?.barcode]),
  );

  useDidMountEffect(() => {
    // Clear buton görünürlüğü
    if (normalizedSearchText === '') {
      setClearButtonVisible(false);
      props.onSearchPress && props.onSearchPress(normalizedSearchText);
    } else {
      setClearButtonVisible(true);
    }
  }, [normalizedSearchText]);

  return (
    <View style={styles.searchBar}>
      <TextInput
        textColor={theme.gray[300]}
        placeholderTextColor={theme.gray[300]}
        value={searchText}
        onChangeText={text => setSearchText(text)}
        placeholder="Aramak için tıklayın..."
        left={<TextInput.Icon icon="magnify" />}
        style={styles.searchTextInput}
        underlineColor={theme.gray[900]}
        activeUnderlineColor={theme.primary.main}
        selectionColor={theme.primary.dark}
        autoCapitalize="none"
        right={
          clearButtonVisible && (
            <TextInput.Icon
              icon={() => <MaterialIcons name="close" size={20} />}
              onPress={() => setSearchText('')}
            />
          )
        }
        onSubmitEditing={
          () => props.onSearchPress(normalizedSearchText) // Convert to lowercase for case-insensitive search
        }
      />
      {!props.hideBarcode && (
        <TouchableOpacity style={styles.barcodeButton}>
          <MaterialCommunityIcons
            name="barcode-scan"
            size={30}
            color={theme.gray[400]}
          />
        </TouchableOpacity>
      )}
      <TouchableOpacity
        style={styles.searchButton}
        onPress={() => props.onSearchPress && props.onSearchPress(searchText)}>
        <Text style={styles.searchButtonText}>ARA</Text>
      </TouchableOpacity>
    </View>
  );
};

const getStyles = (theme: MyTheme) =>
  StyleSheet.create({
    searchBar: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
      backgroundColor: theme.gray[800],
      padding: 10,
      marginHorizontal: 10,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    searchTextInput: {
      backgroundColor: theme.gray[900],
      shadowColor: '#000',
      shadowOpacity: 0.25,
      elevation: 5,
      flex: 3,
    },
    barcodeButton: {
      marginHorizontal: 10,
    },
    searchButton: {
      flex: 1,
      backgroundColor: theme.primary.main,
      alignSelf: 'stretch',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      margin: 3,
    },
    searchButtonText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white',
    },
  });
