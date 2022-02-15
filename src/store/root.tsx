import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from './Test';

const store = configureStore({
  reducer: {
    todosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>

export default store;
