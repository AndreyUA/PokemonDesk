import React from 'react';
import { useRoutes } from 'hookrouter';

import routes from './routes.tsx';
import NotFoundPage from './pages/NotFoundPage/index.tsx';
import Header from './components/Header/index.tsx';

const App = () => {
  const match = useRoutes(routes);

  return match ? (
    <>
      <Header />
      {match}
    </>
  ) : (
    <NotFoundPage />
  );
};

export default App;
