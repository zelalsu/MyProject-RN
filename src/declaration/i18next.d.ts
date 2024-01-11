import 'i18next';

// Constant
import tr from '../constants/translations/tr';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      drawer: typeof tr.drawer;
    };
  }
}
