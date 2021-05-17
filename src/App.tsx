import routes from './routes.tsx';

const { useRoutes } = require('hookrouter');

const App = () => {
  const match = useRoutes(routes);

  return match;
};

export default App;
