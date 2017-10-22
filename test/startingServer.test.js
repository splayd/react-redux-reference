// @flow
import test from 'ava'
import { run, waitForOutput, kill } from '../src/cli'
import { findOpenPort, request } from '../src/http'

test.beforeEach(async t => {
  const port = await findOpenPort()
  const server = run('yarn', 'start', '--', '--port', port)
  await waitForOutput(server, `http://localhost:${port}`)

  Object.assign(t.context, { server, port })
})

test.afterEach.always(async t => {
  const { server } = t.context
  await kill(server)
})

test('starting a server', async t => {
  const { port } = t.context
  const response = await request({ url: `http://localhost:${port}/tasks` })
  t.deepEqual(response, [])
})
