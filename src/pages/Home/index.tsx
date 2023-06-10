import { FC } from 'react';

import { Stack } from '@mui/material';

import ArgsControls from '@/components/ArgsControls';
import AuthorModal from '@/components/AuthorModal';
import Plot from '@/components/Plot';

const Home: FC = () => {
  return (
    <Stack height="100vh">
      <AuthorModal />
      <Plot />
      <ArgsControls />
    </Stack>
  );
};

export default Home;
