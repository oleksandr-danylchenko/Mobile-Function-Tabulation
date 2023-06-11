import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { PersistConfig, persistReducer, persistStore } from 'redux-persist';

import { deleteTextFile, readTextFile, saveTextFile } from '@/filesystem';
import {
  tabulationReducer,
  TabulationState,
} from '@/store/slices/tabulationSlice';

const createFilesystemPersistConfig: <T>(
  key: string,
  blocklist?: Array<string>,
  config?: Partial<PersistConfig<T>>,
) => PersistConfig<T> = (key, blocklist = [], config = {}) => {
  return {
    key: key,
    version: 0,
    storage: {
      getItem: readTextFile,
      setItem: saveTextFile,
      removeItem: deleteTextFile,
    },
    blacklist: blocklist,
    writeFailHandler: (e) => console.error(e, { slice: key }),
    ...config,
  };
};

const combinedReducer = combineReducers({
  tabulation: persistReducer(
    createFilesystemPersistConfig<TabulationState>('tabulationState'),
    tabulationReducer,
  ),
});

const store = configureStore({
  reducer: combinedReducer,
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

export const persistor = persistStore(store);

export default store;
