import { CssBaseline, GlobalStyles } from '@mui/material/';
import { FC } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { BusinessUnitParamsProvider } from './contexts/BusinessUnitParamsContext/businessUnitParamsContext';
import { ThemeProvider } from './contexts/ThemeProviderContext/themeProviderContext';
import store, { persist } from './redux/store';
import { Routes } from './routes';
import { globalStyles } from './styles/global/globalStyles';

const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
        <BusinessUnitParamsProvider>
          <ThemeProvider>
            <CssBaseline />
            <Routes />
            <GlobalStyles styles={globalStyles} />
          </ThemeProvider>
        </BusinessUnitParamsProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
