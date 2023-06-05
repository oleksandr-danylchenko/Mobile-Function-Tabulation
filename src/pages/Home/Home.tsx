import React from 'react';

import { Typography, Stack, Container, css } from '@mui/material';

import Counter from '@/components/Counter/Counter';
import TemplateTester from '@/components/TemplateTester/TemplateTester';

const Home = () => {
  return (
    <Container sx={{ py: 2, position: 'relative' }}>
      <Stack gap={1} my={2}>
        <Typography css={styles} textAlign="center" variant="h2">
          Vite-MUI-TS Template
        </Typography>
        <Typography textAlign="center" variant="subtitle1">
          React + TS + Vite + Redux + RTK + MUI + RRD + Prettier
        </Typography>
      </Stack>
      <TemplateTester />
      <Counter />
    </Container>
  );
};

const styles = css`
  color: red;
`;

export default Home;
