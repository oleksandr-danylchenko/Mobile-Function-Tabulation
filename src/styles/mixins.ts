import { SerializedStyles } from '@emotion/react';
import { css, Theme } from '@mui/material';

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

export const desmosButton = (theme: Theme): SerializedStyles => css`
  background-color: ${theme.palette.primary
    .lighter} !important; // Overrides Desmos inline style
  box-shadow: 0 0 5px #00000026;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding-left: 0;
  padding-right: 0;
  width: 36px;
  height: 36px;
  min-width: unset;
  line-height: 37px;

  svg {
    fill: ${theme.palette.grey[200]};
  }
`;
