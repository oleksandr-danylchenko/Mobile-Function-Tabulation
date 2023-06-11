import { createSlice } from '@reduxjs/toolkit';

export enum TabulationView {
  PLOT,
  TABLE,
}

export interface UIState {
  tabulationView: TabulationView;
}

const initialState: UIState = {
  tabulationView: TabulationView.PLOT,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleView: (state) => {
      state.tabulationView =
        state.tabulationView === TabulationView.PLOT
          ? TabulationView.TABLE
          : TabulationView.PLOT;
    },
  },
});

export const uiReducer = uiSlice.reducer;
