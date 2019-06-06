import * as React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Routers from './Routers';
import configStore from './configStore';

const App = () => {
  const { store, persistor } = configStore();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routers />
      </PersistGate>
    </Provider>
  );
};

export default App;
