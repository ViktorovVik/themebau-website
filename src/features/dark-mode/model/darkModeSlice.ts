import { createSlice } from '@reduxjs/toolkit';

export interface DarkModeState {
  isDark: boolean;
}

const initialState: DarkModeState = {
  isDark: false,
};

export const darkModeSlice = createSlice({
  name: 'dark-mode',
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.isDark = !state.isDark;
    },
  },
});

export const { toggleMode } = darkModeSlice.actions;

export const darkModeReducer = darkModeSlice.reducer;
