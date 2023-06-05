import { FC } from 'react';

import { IonApp, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { CssBaseline } from '@mui/material';

import Routing from './routes/Routing';

setupIonicReact();

const App: FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <CssBaseline />
        <Routing />
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
