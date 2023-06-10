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

// Mixin for absolute positioning centering
export const absoluteCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
