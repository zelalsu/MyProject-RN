import {LoginApiParams, LoginApiResponseParams} from './types';

import apiMiddleware from './apiMiddleware';

export const loginApi = apiMiddleware.injectEndpoints({
  endpoints: builder => ({
    login: builder.query<LoginApiResponseParams, LoginApiParams>({
      query: ({...patch}) => ({
        url: 'Auth/signin',
        method: 'POST',
        body: patch,
      }),
    }),
    logout: builder.query<void, void>({
      query: () => ({
        url: 'Auth/signout',
        method: 'POST',
      }),
    }),
  }),
  overrideExisting: true,
});
export const {useLazyLoginQuery, useLazyLogoutQuery} = loginApi;
