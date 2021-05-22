import React from 'react';
import { useRoutes } from 'hookrouter';

import NotFoundPage from './pages/NotFoundPage/index.tsx';
import routes from './routes.tsx';

const App = () => {
  const match = useRoutes(routes);

  return match || <NotFoundPage />;
};

export default App;
