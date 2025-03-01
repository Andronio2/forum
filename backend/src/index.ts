import fastify, { FastifyServerOptions } from 'fastify';

const port = +(process.env.port || 3000);

const options: FastifyServerOptions = {
  logger: true,
};

const server = fastify(options);

server.get('/', async (request, reply) => {
  return { hello: 'world' };
});

server.listen({ port, host: 'localhost' }, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
});
