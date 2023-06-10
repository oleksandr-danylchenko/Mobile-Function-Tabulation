import { css } from '@mui/material';

export const fullViewport = css`
  width: 100vw;
  height: 100vh;
`;

export const fullWidth = css`
  width: 100%;
`;

export const fullHeight = css`
  height: 100%;
`;

export const fullParent = css`
  ${fullWidth};
  ${fullHeight};
`;
