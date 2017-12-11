// @flow
import test from 'ava'
import count from '../../../src/ui/reducers/count'

test('satisfying the contract of combineReducers', t => {
  // $FlowFixMe
  t.is(count(20, { type: 'UNKNOWN' }), 20)

  // $FlowFixMe
  t.is(count(undefined, { type: 'UNKNOWN' }), 0)
})

test('incrementing the count', t => {
  t.is(count(0, { type: 'INCREMENT' }), 1)
  t.is(count(1, { type: 'INCREMENT' }), 2)
})

test('decrementing the count', t => {
  t.is(count(2, { type: 'DECREMENT' }), 1)
  t.is(count(1, { type: 'DECREMENT' }), 0)
})
