import {
  Linking,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

//Header
import Header from '@src/components/UI/Header';
import {useTheme} from '@react-navigation/native';
import getStyles from './style';
import {useTranslation} from 'react-i18next';

import Lınkedln from '@assets/svg/Contact/Linkedln.svg';

import {DrawerStackScreenProps} from '@src/navigation/types';

const ContactScreen = ({
  navigation,
}: DrawerStackScreenProps<'DrawerNavigator', 'ContactScreen'>) => {
  const theme = useTheme();
  const styles = React.useMemo(() => getStyles(theme), [theme]);
  const {t} = useTranslation('drawer');

  const openURL = (url: string) => {
    if (Platform.OS === 'android') {
      Linking.openURL(url).catch(() => {
        if (url.startsWith('http://') || url.startsWith('https://')) {
          Linking.openURL(`googlechrome://navigate?url=${url}`);
        }
      });
    } else {
      // For iOS
      Linking.canOpenURL(url).then(supported => {
        if (supported) {
          Linking.openURL(url);
        } else {
          console.log(`Don't know how to open this URL: ${url}`);
        }
      });
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Header
          presentation="back"
          insetTop={true}
          textOptions={{
            shown: true,
            title: t('CONTACT'),
          }}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{t('CENTRE')}</Text>
          <Text style={styles.desc}>
            Folkart Time - Kazım Dirik Mahallesi 296 Sokak No:8 D:905 Bornova,
            İzmir, Türkiye
          </Text>
          <View style={styles.horizantalLine} />
          <Text style={styles.title}>{t('PHONE')}</Text>
          <Text style={styles.desc}>+90 850 840 00 19</Text>
          <View style={styles.horizantalLine} />
          <Text style={styles.title}>{t('EMAİL')}</Text>
          <Text style={styles.desc}>info@arunayazilim.com</Text>
          <View style={styles.horizantalLine} />
          <Text style={styles.title}>Web</Text>
          <Text style={styles.desc}>https://arunayazilim.com/ </Text>
          <TextInput placeholder="Enter decimal value" keyboardType="numeric" />
        </View>

        <View style={styles.followIconContainer}>
          <TouchableOpacity
            onPress={() => openURL('https://twitter.com/izeltastr')}
            activeOpacity={0.9}>
            <Lınkedln />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openURL('https://www.facebook.com/izeltaselaletleri/')
            }
            activeOpacity={0.9}>
            <Lınkedln />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openURL('https://www.instagram.com/izeltas_/')}
            activeOpacity={0.9}>
            <Lınkedln />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openURL(
                'https://www.youtube.com/channel/UCJlLF6fFMftFg9qJ5rccsug',
              )
            }
            activeOpacity={0.9}>
            <Lınkedln />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ContactScreen;
