import { FC } from 'react';

import { Stack, Box } from '@mui/material';

import ArgsControls from '@/components/ArgsControls';
import AuthorModal from '@/components/AuthorModal';

const Home: FC = () => {
  return (
    <Stack height="100vh" gap={2}>
      <AuthorModal />
      <Box flex={1} sx={{ backgroundColor: 'white' }} />
      <ArgsControls />
    </Stack>
  );
};

export default Home;
