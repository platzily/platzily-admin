import { FastifyInstance } from 'fastify';

export async function startServe(server: FastifyInstance) {
  try {
    await server.listen(5000)

    const address = server.server.address()
    const port = typeof address === 'string' ? address : address?.port

  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}
