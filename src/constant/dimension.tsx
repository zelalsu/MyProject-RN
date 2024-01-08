import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const window = {
  width,
  height,
};

export const tabBarHeight = 82;
export const headerHeight = 50;

const base = 'http://demo.arunayazilim.com:8081/v1/';
export const baseUrl = base + 'api/';
