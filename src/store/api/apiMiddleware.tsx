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

// const a = {
//   data: [
//     {id: '1b588965-c101-bc20-927c-429257567a8d', name: 'Muhasebe'},
//     {id: '8b73379e-0a09-e477-f666-be71855d02d4', name: 'MagazaKullanicisi'},
//     {id: 'b22e3f4e-d6a0-a2c3-01b7-3214ba728d8e', name: 'Admin'},
//   ],
//   meta: {
//     request: {
//       _bodyInit: undefined,
//       _bodyText: '',
//       _noBody: true,
//       bodyUsed: false,
//       credentials: 'same-origin',
//       headers: [Headers],
//       method: 'GET',
//       mode: null,
//       referrer: null,
//       signal: [AbortSignal],
//       url: 'http://demo.arunayazilim.com:8081/v1/api/KullaniciList/myroles',
//     },
//     response: {
//       _bodyBlob: [Blob],
//       _bodyInit: [Blob],
//       bodyUsed: true,
//       headers: [Headers],
//       ok: true,
//       status: 200,
//       statusText: '',
//       type: 'default',
//       url: 'http://demo.arunayazilim.com:8081/v1/api/KullaniciList/myroles',
//     },
//   },
// };
const apiMiddleware = createApi({
  baseQuery: baseQueryWithReauth,
  reducerPath: '',
  keepUnusedDataFor: 0,
  tagTypes: ['User'],

  endpoints: () => ({}),
});

export default apiMiddleware;
