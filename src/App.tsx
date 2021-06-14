import React from 'react';
import { useRoutes } from 'hookrouter';
import { Provider } from 'react-redux';

import routes from './routes.tsx';
import NotFoundPage from './pages/NotFoundPage/index.tsx';
import Header from './components/Header/index.tsx';
import configureStore from './configureStore';

const store = configureStore({});

const App = () => {
  const match = useRoutes(routes);

  return match ? (
    <Provider store={store}>
      <Header />
      {match}
    </Provider>
  ) : (
    <NotFoundPage />
  );
};

export default App;
