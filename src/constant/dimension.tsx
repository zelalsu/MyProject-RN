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
export const baseCategoryImageUrl = base + 'storage/categories/';
export const baseProductImageUrl = base + 'storage/products/';
export const baseCampaignsImageUrl = base + 'storage/campaigns/';
