import apiMiddleware from './apiMiddleware';

// Constant

export const userListApi = apiMiddleware.injectEndpoints({
  endpoints: builder => ({
    userList: builder.query<void, void>({
      query: () => ({
        url: 'KullaniciList/myroles',
        method: 'GET',
      }),
    }),
  }),
  overrideExisting: true,
});

export const {useLazyUserListQuery} = userListApi;
