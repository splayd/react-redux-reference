// @flow
import test from 'ava'
import reducer from '../../../src/ui/reducers'

test('correctly combining all of the reducers', t => {
  t.deepEqual(reducer({ count: 0 }, { type: 'INCREMENT' }), { count: 1 })
})
