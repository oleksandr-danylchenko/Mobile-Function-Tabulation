import { keyBy } from 'lodash';

export enum FunctionKey {
  X_SQUARED,
  ONE_OVER_X,
}

export interface FunctionOption {
  readonly key: FunctionKey;
  readonly label: string;
  readonly execute: (x: number) => number;
}

const functionOptions: Array<FunctionOption> = [
  {
    key: FunctionKey.X_SQUARED,
    label: 'x<sup>2</sup>',
    execute: (x) => x ** 2,
  },
  {
    key: FunctionKey.ONE_OVER_X,
    label: '1/x',
    execute: (x) => 1 / x,
  },
];

export const functionsOptions = keyBy(functionOptions, 'key');
