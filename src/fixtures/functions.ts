import { keyBy } from 'lodash';

export enum FunctionKey {
  X_SQUARED,
  ONE_OVER_X,
}

export interface FunctionOption {
  readonly key: FunctionKey;
  readonly label: string;
  readonly latex: string;
  readonly execute: (x: number) => number;
}

export const functionOptions: Array<FunctionOption> = [
  {
    key: FunctionKey.X_SQUARED,
    label: 'x^2',
    latex: 'x^2',
    execute: (x) => x ** 2,
  },
  {
    key: FunctionKey.ONE_OVER_X,
    label: '1/x',
    latex: '1/x',
    execute: (x) => (isEpsilonZero(x) ? NaN : 1 / x),
  },
];

const isEpsilonZero = (x: number): boolean => Math.abs(x) < 1e-10;

export const functionsOptions = keyBy(functionOptions, 'key');
