import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';

import { apiSlice } from './api/apiSlice';

import { counterReducer } from '@/features/counterSlice';
import userReducer from '@/features/user/userSlice';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    // Add your reducers here
    counter: counterReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
