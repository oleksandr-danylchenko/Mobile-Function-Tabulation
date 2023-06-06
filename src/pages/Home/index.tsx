import { FC } from 'react';

import { Stack, Typography, Box } from '@mui/material';

import ArgsControls from '@/components/ArgsControls';

const Home: FC = () => {
  return (
    <Stack height="100vh" py={2} gap={1}>
      <Typography textAlign="center" variant="h2">
        Function tabulation
      </Typography>
      <Box flex={1} sx={{ backgroundColor: 'wheat' }} />
      <ArgsControls />
    </Stack>
  );
};

export default Home;
