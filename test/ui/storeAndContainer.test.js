// @flow
import test from 'ava'
import * as React from 'react'
import { mount } from '../helpers'
import createStore from '../../src/ui/createStore'

type State = { count: number }
const initialState: State = { count: 0 }

function count(state: State): number {
  return state.count
}

type IncrementAction = { type: 'INCREMENT' }
type DecrementAction = { type: 'DECREMENT' }
type Action = IncrementAction | DecrementAction

function increment(): IncrementAction {
  return { type: 'INCREMENT' }
}

function decrement(): DecrementAction {
  return { type: 'DECREMENT' }
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }
    case 'DECREMENT':
      return { count: state.count - 1 }
    default:
      return state
  }
}

type Props = {
  count: number,
  increment: () => void,
  decrement: () => void
}

function Counter({ count, increment, decrement }: Props) {
  return (
    <div>
      <p className="count">{count}</p>
      <button className="increment" onClick={increment}>
        Increment
      </button>
      <button className="decrement" onClick={decrement}>
        Decrement
      </button>
    </div>
  )
}

test('creating a store and containers', t => {
  const { Store, createContainer } = createStore(reducer, initialState)
  const CounterContainer = createContainer(
    { count },
    { increment, decrement },
    Counter
  )

  const application = mount(
    <Store>
      <CounterContainer />
    </Store>
  )

  t.is(application.find('.count').text(), '0')

  application.find('.increment').simulate('click')
  t.is(application.find('.count').text(), '1')

  application.find('.increment').simulate('click')
  t.is(application.find('.count').text(), '2')

  application.find('.decrement').simulate('click')
  t.is(application.find('.count').text(), '1')

  application.find('.decrement').simulate('click')
  t.is(application.find('.count').text(), '0')
})
