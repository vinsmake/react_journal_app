
import { configureStore } from '@reduxjs/toolkit';
import { AuthSlice } from './auth/authSlice';
import { JournalSlice } from './journal/journalSlice';

export const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    journal: JournalSlice.reducer
  },
});