import { keyBy } from 'lodash';

export enum FunctionKey {
  X_SQUARED,
  X_CUBED,
  X_ROOTED,
  SIN_X,
  COS_X,
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
    key: FunctionKey.X_CUBED,
    label: 'x^3',
    latex: 'x^3',
    execute: (x) => x ** 3,
  },
  {
    key: FunctionKey.X_ROOTED,
    label: '√x',
    latex: '√x',
    execute: (x) => Math.sqrt(x),
  },
  {
    key: FunctionKey.SIN_X,
    label: 'sin(x)',
    latex: 'sin(x)',
    execute: (x) => Math.sin(x),
  },
  {
    key: FunctionKey.COS_X,
    label: 'cos(x)',
    latex: 'cos(x)',
    execute: (x) => Math.cos(x),
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
