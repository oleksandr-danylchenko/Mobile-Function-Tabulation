import { FC, PropsWithChildren } from 'react';

import { Box } from '@mui/material';

interface Props extends PropsWithChildren {
  isEditing: boolean;
  isEvaluating: boolean;
}

const PlotOverlay: FC<Props> = (props) => {
  const { isEditing, isEvaluating, children } = props;
  const isInert = isEditing || isEvaluating;

  return (
    <Box
      position="relative"
      flex={1}
      sx={{
        pointerEvents: isInert ? 'none' : 'auto', // Helps to move focus from inputs
      }}
    >
      {children}
    </Box>
  );
};

export default PlotOverlay;
