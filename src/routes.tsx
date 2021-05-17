import React from 'react';

import Home from './pages/Home/index.tsx';
import Empty from './pages/Empty/index.tsx';

const routes = {
  '/': () => <Home />,
  '/pokedex': () => <Empty />,
};

export default routes;
