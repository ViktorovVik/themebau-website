import { configureStore } from '@reduxjs/toolkit';
import { darkModeReducer } from '@/features/dark-mode';

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
