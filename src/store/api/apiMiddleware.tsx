import {
  BaseQueryApi,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import {baseUrl} from '../../constant/dimension';
import {RootState} from '..';
import {setRoute} from '../slices/route';
import {setUserInitialState} from '../slices/user';

const baseQuery = fetchBaseQuery({
  baseUrl: baseUrl,
  prepareHeaders: (headers, {getState}) => {
    // const language_id = getState().language.id;
    headers.set('Accept', 'application/json');

    const token = (getState() as RootState).user.user.tokenString; // user yerine uygun olan reducer'ın adını ve token'ın orada bulunduğu alanı belirtin

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

export const baseQueryWithReauth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: {},
) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error?.status) {
    api.dispatch(setUserInitialState());
    api.dispatch(setRoute({path: 'AuthNavigator'}));
  }

  return result;
};

const apiMiddleware = createApi({
  baseQuery: baseQueryWithReauth,
  reducerPath: '',
  keepUnusedDataFor: 0,
  tagTypes: ['User'],

  endpoints: () => ({}),
});

export default apiMiddleware;
