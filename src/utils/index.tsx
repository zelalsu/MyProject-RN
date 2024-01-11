import {
  PixelRatio,
  Platform,
  NativeModules,
  PermissionsAndroid,
  Alert,
  Permission,
} from 'react-native';
//   import ReactNativeHapticFeedback, {
//     HapticFeedbackTypes,
//   } from 'react-native-haptic-feedback';
//   import RNShare from 'react-native-share';
//   import RNFetchBlob from 'rn-fetch-blob';

// Constant

// Type
import {GetDateParams, AlertParams, FileShareParams} from './types';

// Vibration
//   export const hapticFeedback = ({ios, android}: HapticFeedbackParams): void => {
//     return Platform.OS === 'android'
//       ? ReactNativeHapticFeedback.trigger(
//           android ? android : 'effectClick',
//           options,
//         )
//       : ReactNativeHapticFeedback.trigger(ios ? ios : 'impactHeavy', options);
//   };

// Date is returned according to the variable you entered.
export const getDate = ({
  year,
  month,
  day,
  hours,
  minutes,
  seconds,
  ms,
}: GetDateParams): Date => {
  return new Date(
    Date.UTC(
      year,
      month - 1,
      day ? day : 1,
      hours ? hours : 0,
      minutes ? minutes : 0,
      seconds ? seconds : 0,
      ms ? ms : 0,
    ),
  );
};

// Recalculates the entered number according to the screen Inches

// It helps to find the native language of the phone..
export function getSystemLocale(): string {
  let locale: string = '';
  // iOS
  if (
    NativeModules.SettingsManager &&
    NativeModules.SettingsManager.settings &&
    NativeModules.SettingsManager.settings.AppleLanguages
  ) {
    locale = NativeModules.SettingsManager.settings.AppleLanguages[0];
    // Android
  } else if (NativeModules.I18nManager) {
    locale = NativeModules.I18nManager.localeIdentifier;
  }

  if (typeof locale === 'undefined') {
    return 'tr-TR';
  }

  return locale;
}

// Removes spaces in string

// ANDROID PERMISSION
// export const requestAndroidPermission = async (
//   permission: Permission,
// ): Promise<boolean | undefined> => {
//   try {
//     const granted = await PermissionsAndroid.request(permission);
//     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//       return true;
//     } else {
//       return false;
//     }
//   } catch (err) {
//     throw new Error('something went wrong');
//   }
// };

// SLUGIFY
// export const slugify = (text: string) => {
//   let trMap: {[key: string]: string} = {
//     çÇ: 'c',
//     ğĞ: 'g',
//     şŞ: 's',
//     üÜ: 'u',
//     ıİ: 'i',
//     öÖ: 'o',
//   };

//   for (let key in trMap) {
//     text = text.replace(new RegExp('[' + key + ']', 'g'), trMap[key]);
//   }
//   return text
//     .trim()
//     .replace(/[^-a-zA-Z0-9\s]+/gi, '')
//     .replace(/\s/gi, '-')
//     .replace(/[-]+/gi, '-')
//     .toLowerCase();
// };

// ALERT

// SAVE PHOTO
