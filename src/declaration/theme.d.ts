import '@react-navigation/native';
import {Theme} from '@react-navigation/native';

// Type
import {MyTheme} from '../constants/types';

declare module '@react-navigation/native' {
  export function useTheme(): Theme & MyTheme;
}
