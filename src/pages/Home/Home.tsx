import { FC } from 'react';

import { Typography, Stack, css } from '@mui/material';

import Counter from '@/components/Counter/Counter';

const Home: FC = () => {
  return (
    <>
      <Stack gap={1} my={2}>
        <Typography css={styles} textAlign="center" variant="h2">
          Vite-MUI-TS Template
        </Typography>
        <Typography textAlign="center" variant="subtitle1">
          React + TS + Vite + Redux + RTK + MUI + RRD + Prettier
        </Typography>
      </Stack>
      <Counter />
    </>
  );
};

const styles = css`
  color: red;
`;

export default Home;
