import { FC } from 'react';
import { Route } from 'react-router-dom';

import { IonRouterOutlet } from '@ionic/react';
import { Container } from '@mui/material';

import Home from '@/pages/Home/Home';

const Routing: FC = () => {
  return (
    <Container sx={{ py: 2, position: 'relative' }}>
      <IonRouterOutlet>
        <Route render={Home} />
      </IonRouterOutlet>
    </Container>
  );
};

export default Routing;
