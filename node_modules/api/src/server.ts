import Fastify from 'fastify'

const server = Fastify()

server.get('/ping', async (req, res) => {
  return { pong: true }
})

server.listen({ port: 3001 }, err => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log('Server running on http://localhost:3001')
})
