/// <reference lib="webworker" />
import { evaluateFunctionResults } from '@/utils/calculate';

export const evaluateFunctionResultsSW: typeof evaluateFunctionResults = (
  ...args
) => evaluateFunctionResults(...args);
