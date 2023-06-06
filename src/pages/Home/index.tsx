import { FC } from 'react';

import { Stack, Box } from '@mui/material';

import ArgsControls from '@/components/ArgsControls';

const Home: FC = () => {
  return (
    <Stack height="100vh" pb={2} gap={2}>
      <Box flex={1} sx={{ backgroundColor: 'wheat' }} />
      <ArgsControls />
    </Stack>
  );
};

export default Home;
