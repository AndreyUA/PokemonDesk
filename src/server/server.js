/* eslint-disable no-console */

const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

  server.route({
    method: 'GET',
    path: '/{any*}',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    handler: (request, h) => {
      return `Hello World! This is page ${request.path}`;
    },
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
