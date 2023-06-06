import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  FunctionKey,
  FunctionOption,
  functionsOptions,
} from '@/fixtures/functions';
import type { RootState } from '@/store/store';

interface TabulationState {
  funcKey: FunctionKey;
  x: {
    start: string;
    end: string;
  };
}

const initialState: TabulationState = {
  funcKey: FunctionKey.X_SQUARED,
  x: {
    start: '-1',
    end: '1',
  },
};

const tabulationSlice = createSlice({
  name: 'tabulation',
  initialState,
  reducers: {
    setFunc: (state, action: PayloadAction<FunctionKey>) => {
      state.funcKey = action.payload;
    },
    setX: (state, action: PayloadAction<Partial<TabulationState['x']>>) => {
      state.x = {
        ...state.x,
        ...action.payload,
      };
    },
  },
});

export const tabulationReducer = tabulationSlice.reducer;

export const { setFunc, setX } = tabulationSlice.actions;

export const selectFunctionOption = (state: RootState): FunctionOption =>
  functionsOptions[state.tabulation.funcKey]!;
