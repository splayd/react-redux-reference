// @flow
import * as React from 'react'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { increment, decrement, slowIncrement } from './actions'
import { count } from './selectors'

type Props = {
  count: number,
  increment: () => void,
  decrement: () => void,
  slowIncrement: () => void
}

export function Counter({ count, increment, decrement, slowIncrement }: Props) {
  return (
    <div>
      <div className="count">{count}</div>
      <div>
        <button className="increment" onClick={increment}>
          Increment
        </button>
        <button className="decrement" onClick={decrement}>
          Decrement
        </button>
      </div>
      <div>
        <button className="slow-increment" onClick={slowIncrement}>
          Increment
        </button>
      </div>
    </div>
  )
}

export default connect(createStructuredSelector({ count }), {
  increment,
  decrement,
  slowIncrement
})(Counter)
