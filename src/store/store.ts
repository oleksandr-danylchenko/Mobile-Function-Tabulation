import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { configureStore, createAsyncThunk } from '@reduxjs/toolkit';

import { tabulationReducer } from '@/store/slices/tabulationSlice';

const store = configureStore({
  reducer: { tabulation: tabulationReducer },
  devTools: {
    stateSanitizer: (state: any) => ({
      ...state,
      tabulation: {
        ...state.tabulation,
        results: '<omitted from Redux DevTools>',
      },
    }),
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState;
  dispatch: AppDispatch;
}>();

export default store;
