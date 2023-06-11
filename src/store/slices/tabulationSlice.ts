import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';

import { FunctionKey } from '@/fixtures/functions';
import { evaluateFunc, reevaluateFunc } from '@/store/actions/tabulation';

export interface TabulationControls {
  funcKey: FunctionKey;
  xStart: number;
  xEnd: number;
  step: number;
}

export type TabulationResults = {
  evaluatedAt: number;
  x: string[];
  y: string[];
};

export interface TabulationState {
  isEvaluating: boolean;
  controls: TabulationControls;
  results?: TabulationResults;
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
};

const tabulationSlice = createSlice({
  name: 'tabulation',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(reevaluateFunc.pending, (state, action) => {
        Object.assign(state.controls, action.meta.arg);
      })
      .addMatcher(isPending(evaluateFunc, reevaluateFunc), (state) => {
        state.isEvaluating = true;
      })
      .addMatcher(
        isFulfilled(evaluateFunc, reevaluateFunc),
        (state, action) => {
          state.isEvaluating = false;
          state.results = action.payload;
        },
      )
      .addMatcher(isRejected(evaluateFunc, reevaluateFunc), (state, action) => {
        if (!action.meta.condition) {
          state.isEvaluating = false;
        }
      });
  },
});

export const tabulationReducer = tabulationSlice.reducer;

// export const { reevaluateFunc } = tabulationSlice.actions;
