const fastify = require('fastify')();
const port = 8123;

fastify.get('*', (req, res) => {
  // console.log('yoyoy');
  res.send('Hello World from Fastify app!');
});
fastify.listen(port, () => {
  console.log(`Fastify "Hello World" listening on port ${port}, PID: ${process.pid}`);
});
