import { FC } from 'react';
import { Route } from 'react-router-dom';

import { IonContent, IonRouterOutlet } from '@ionic/react';

import Home from '@/pages/Home/Home';

const Routing: FC = () => (
  <IonContent>
    <IonRouterOutlet>
      <Route render={Home} />
    </IonRouterOutlet>
  </IonContent>
);

export default Routing;
