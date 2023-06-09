import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { ArgsControlsForm } from '@/components/ArgsControls';
import {
  FunctionKey,
  FunctionOption,
  functionsOptions,
} from '@/fixtures/functions';
import type { RootState } from '@/store/store';

export interface TabulationState {
  funcKey: FunctionKey;
  xStart: number;
  xEnd: number;
  step: number;
}

const initialState: TabulationState = {
  funcKey: FunctionKey.X_SQUARED,
  xStart: -1,
  xEnd: 1,
  step: 0.1,
};

const tabulationSlice = createSlice({
  name: 'tabulation',
  initialState,
  reducers: {
    setTabulationArgs: (state, action: PayloadAction<ArgsControlsForm>) =>
      Object.assign(state, action.payload),
  },
});

export const tabulationReducer = tabulationSlice.reducer;

export const { setTabulationArgs } = tabulationSlice.actions;

export const selectFunctionOption = (state: RootState): FunctionOption =>
  functionsOptions[state.tabulation.funcKey]!;

export const selectArgsControls = createSelector(
  (state: RootState) => state.tabulation,
  (tabulation) => ({
    funcKey: tabulation.funcKey,
    xStart: tabulation.xStart,
    xEnd: tabulation.xEnd,
    step: tabulation.step,
  }),
);
