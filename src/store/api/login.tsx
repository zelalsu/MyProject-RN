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
  }),
  overrideExisting: true,
});
export const {useLazyLoginQuery} = loginApi;
