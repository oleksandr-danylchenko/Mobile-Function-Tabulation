import { FC } from 'react';

import { Stack, Typography, Box } from '@mui/material';

const Home: FC = () => {
  return (
    <Stack gap={1} my={2}>
      <Typography textAlign="center" variant="h2">
        Function tabulation
      </Typography>
      <Box height="90%"></Box>
    </Stack>
  );
};

export default Home;
