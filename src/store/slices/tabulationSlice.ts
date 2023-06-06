import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FunctionKey } from '@/fixtures/functions';

interface TabulationState {
  funcKey: FunctionKey;
  xStart: number;
  xEnd: number;
}

const initialState: TabulationState = {
  funcKey: FunctionKey.X_SQUARED,
  xStart: -1,
  xEnd: 1,
};

const tabulationSlice = createSlice({
  name: 'tabulation',
  initialState,
  reducers: {
    setFunc: (state, action: PayloadAction<FunctionKey>) => {
      state.funcKey = action.payload;
    },
    setXStart: (state, action: PayloadAction<number>) => {
      state.xStart = action.payload;
    },
    setXEnd: (state, action: PayloadAction<number>) => {
      state.xEnd = action.payload;
    },
  },
});

export const tabulationReducer = tabulationSlice.reducer;

export const { setFunc, setXStart, setXEnd } = tabulationSlice.actions;
