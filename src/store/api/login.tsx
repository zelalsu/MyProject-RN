// Middleware

// import {
//   ChangePasswordResponseParams,
//   LoginApiParams,
//   LoginApiResponseParams,
// } from "./types";
import {create} from 'react-test-renderer';
import apiMiddleware from './apiMiddleware';
import {LoginApiParams, LoginApiResponseParams} from './types';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {baseUrl} from '../../constant/dimension';

export const loginApi = createApi({
  baseQuery: fetchBaseQuery({baseUrl: baseUrl}), // Değiştirilmesi gereken kısmı kendi API adresinizle güncelleyin

  endpoints: builder => ({
    login: builder.query<LoginApiResponseParams, LoginApiParams>({
      query: ({...patch}) => ({
        url: 'Auth/signin',
        method: 'POST',
        body: patch,
      }),
    }),
  }),
});
export const {useLazyLoginQuery} = loginApi;
