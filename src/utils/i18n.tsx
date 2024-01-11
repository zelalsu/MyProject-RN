import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

// Constant

import tr from '@src/constant/translations/tr';
import en from '@src/constant/translations/en';

// Multi language handler
i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'tr',
  fallbackLng: ['tr', 'en'],
  resources: {
    tr: tr,
    en: en,
  },
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
