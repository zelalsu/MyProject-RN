import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// Type
import {LangugeSliceParams} from '../types';

const initialState: LangugeSliceParams = {
  id: '',
  code: '',
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<LangugeSliceParams>) => {
      return action.payload;
    },
  },
});

export const {setLanguage} = languageSlice.actions;
export default languageSlice.reducer;
