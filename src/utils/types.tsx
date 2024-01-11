import {SvgProps} from 'react-native-svg';
import {StyleProp, ViewStyle} from 'react-native/types';

export interface SvgHelperProps {
  code: string;
  style?: StyleProp<ViewStyle>;
  props?: SvgProps;
}

export type GetDateParams = {
  year: number;
  month: number;
  day?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
  ms?: number;
};

export type AlertParams = {
  title?: string;
  desc?: string;
  okText?: string;
  cancelText?: string;
  okPress?: () => void;
  cancelPress?: () => void;
  cancelButton?: boolean;
};

export type FileShareParams = {
  url: string;
  name?: string;
  mime: string;
  type: 'download' | 'share' | 'both';
};
