const fastify = require('fastify')();
const port = 8123;

fastify.get('*', (req, res) => {
  // console.log('yoyoy');
  res.send('Hello World');
});
fastify.listen(port, () => {
  console.log(`Fastify "Hello World" listening on port ${port}, PID: ${process.pid}`);
});
