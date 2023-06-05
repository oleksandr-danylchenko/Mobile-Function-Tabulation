import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';

import { counterReducer } from '@/app/slices/counterSlice';

const store = configureStore({
  reducer: { counter: counterReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
