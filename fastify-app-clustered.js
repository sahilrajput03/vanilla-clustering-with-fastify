const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const fastify = require('fastify')();
const port = 8123;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);
  console.log('FYI: numCPUs:', numCPUs)
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on('exit', worker => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  fastify.get('*', (req, res) => {
    res.send('Hello World');
  });
  fastify.listen(port, () => {
    console.log(`Fastify "Hello World" listening on port ${port}, PID: ${process.pid}`);
  });
}
