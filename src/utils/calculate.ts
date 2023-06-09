import { functionsOptions } from '@/fixtures/functions';
import {
  TabulationControls,
  TabulationResults,
} from '@/store/slices/tabulationSlice';

export const evaluateFunctionResults = (
  controls: TabulationControls,
): TabulationResults => {
  const { funcKey, xStart, xEnd, step } = controls;
  const funcExecute = functionsOptions[funcKey]!.execute;

  const results: TabulationResults = [];
  for (let x = xStart; x <= xEnd; x += step) {
    results.push({ x, y: funcExecute(x) });
  }
  return results;
};
