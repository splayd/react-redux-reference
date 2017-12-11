// @flow
import test from 'ava'
import { count } from '../../../src/ui/selectors'

test('reading the count from the state', t => {
  t.is(count({ count: 1 }), 1)
})
