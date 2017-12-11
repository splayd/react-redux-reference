// @flow
import test from 'ava'
import { increment } from '../../../src/ui/actions'

test('creating a INCREMENT action', t => {
  t.deepEqual(increment(), { type: 'INCREMENT' })
})
