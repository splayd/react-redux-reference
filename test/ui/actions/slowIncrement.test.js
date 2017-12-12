// @flow
import test from 'ava'
import { slowIncrement } from '../../../src/ui/actions'

test('creating a INCREMENT action asynchronously', async t => {
  t.deepEqual(await slowIncrement(), { type: 'INCREMENT' })
})
