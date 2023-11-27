import path from 'path'
import Loki from 'lokijs'
import fastify from 'fastify'

const db = new Loki(path.resolve(__dirname, '../database.json'))

export class FastifyServer {
  constructor(port: number) {
    this.port = port
  }

  private port: number

  init() {
    const server = fastify()

    server.get('/ping', async (request, reply) => {
      return 'pong\n'
    })

    server.listen({ port: this.port || 0 }, (err, address) => {
      if (err) {
        console.error(err)
        process.exit(1)
      }
      console.log(`Server listening at ${address}`)
    })
  }
}
