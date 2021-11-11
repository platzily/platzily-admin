// Require the framework and instantiate it
const fastify = require('fastify')({ logger: {level: 'info'} })

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3010)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
