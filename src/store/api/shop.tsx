// shopApi definition
import apiMiddleware from './apiMiddleware';
import {ShopApiParams, ShopApiResponseParams} from './types';

export const shopApi = apiMiddleware.injectEndpoints({
  endpoints: builder => ({
    shopApi: builder.mutation<ShopApiParams, ShopApiResponseParams>({
      query: data => ({
        url: 'MagazaGunSonu/MagazaGunSonuPageInit',
        method: 'POST',
        body: data,
      }),
    }),
  }),
  overrideExisting: true,
});

export const {useShopApiMutation} = shopApi;
