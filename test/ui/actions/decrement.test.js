// @flow
import test from 'ava'
import { decrement } from '../../../src/ui/actions'

test('creating a DECREMENT action', t => {
  t.deepEqual(decrement(), { type: 'DECREMENT' })
})
