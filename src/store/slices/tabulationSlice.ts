import { createSlice } from '@reduxjs/toolkit';

import { FunctionKey } from '@/fixtures/functions';
import { reevaluateFunc } from '@/store/actions/tabulation';

export interface TabulationControls {
  funcKey: FunctionKey;
  xStart: number;
  xEnd: number;
  step: number;
}

export type TabulationResults = Array<{
  x: number;
  y: number;
}>;

export interface TabulationState {
  isEvaluating: boolean;
  controls: TabulationControls;
  results: TabulationResults;
}

const initialControls = {
  funcKey: FunctionKey.X_SQUARED,
  xStart: -1,
  xEnd: 1,
  step: 0.1,
};

const initialState: TabulationState = {
  isEvaluating: true,
  controls: initialControls,
  results: [],
};

const tabulationSlice = createSlice({
  name: 'tabulation',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(reevaluateFunc.pending, (state, action) => {
      state.isEvaluating = true;
      Object.assign(state, action.meta.arg);
    });
    builder.addCase(reevaluateFunc.fulfilled, (state, action) => {
      state.isEvaluating = false;
      state.results = action.payload;
    });
  },
});

export const tabulationReducer = tabulationSlice.reducer;

// export const { reevaluateFunc } = tabulationSlice.actions;
