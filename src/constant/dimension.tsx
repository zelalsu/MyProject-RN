import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const window = {
  width,
  height,
};

export const tabBarHeight = 70;
export const headerHeight = 60;

const base = 'http://212.98.224.197:1979/v1/';
export const baseUrl = base + 'api/';
