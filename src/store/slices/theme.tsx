import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// Type
import {ThemeSliceParams} from '../types';

const initialState: ThemeSliceParams = {
  mode: 'system',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (
      state: ThemeSliceParams,
      action: PayloadAction<ThemeSliceParams>,
    ) => {
      state.mode = action.payload.mode;
    },
  },
});

export const {setTheme} = themeSlice.actions;
export default themeSlice.reducer;
