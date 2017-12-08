// @flow
import * as React from 'react'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { increment, decrement } from './actions'
import { count } from './selectors'

type Props = {
  count: number,
  increment: () => void,
  decrement: () => void
}

export function Counter({ count, increment, decrement }: Props) {
  return (
    <div>
      <div className="count">{count}</div>
      <button className="increment" onClick={increment}>
        Increment
      </button>
      <button className="decrement" onClick={decrement}>
        Decrement
      </button>
    </div>
  )
}

export default connect(createStructuredSelector({ count }), {
  increment,
  decrement
})(Counter)
