import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// Type
import {UserInfoParams, UserSliceParams} from '../types';

const initialState: UserSliceParams = {
  user: {
    firstName: '',
    id: '',
    language: null,
    lastName: '',
    refreshToken: '',
    status: 0,
    tokenString: '',
    username: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (
      state: UserSliceParams,
      action: PayloadAction<UserInfoParams>,
    ) => {
      state.user = {...action.payload}; // Kopyalama işlemi yaparak mevcut kullanıcı bilgilerini koru
    },

    setUserInitialState: () => {
      return initialState;
    },
  },
});

export const {setUserInfo, setUserInitialState} = userSlice.actions;
export default userSlice.reducer;
