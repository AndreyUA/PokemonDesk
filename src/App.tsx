import { useRoutes } from 'hookrouter';

import routes from './routes.tsx';

const App = () => {
  const match = useRoutes(routes);

  return match;
};

export default App;
