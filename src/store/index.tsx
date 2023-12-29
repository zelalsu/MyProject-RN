import {configureStore, combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import {thunk} from 'redux-thunk';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {loginApi} from './api/login';
import user from './slices/user';
import apiMiddleware from './api/apiMiddleware';

// Reducer
// Api

const rootReducer = combineReducers({
  [loginApi.reducerPath]: loginApi.reducer,
  user: user,
  [apiMiddleware.reducerPath]: apiMiddleware.reducer,
});
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: {
        warnAfter: 1000,
        serializableCheck: false,
      },
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        warnAfter: 1000,
      },
    }).concat(thunk, loginApi.middleware, apiMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Redux hooks with types
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const persistor = persistStore(store);