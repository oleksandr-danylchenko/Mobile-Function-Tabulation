import { FC } from 'react';

import { Box } from '@mui/material';

const Plot: FC = () => {
  return (
    <Box
      flex={1}
      sx={{
        backgroundColor: 'primary.lighter',
        borderBottomLeftRadius: (theme) => theme.spacing(2.2),
        borderBottomRightRadius: (theme) => theme.spacing(2.2),
      }}
    >
      Here will be the plot
    </Box>
  );
};

export default Plot;
