// @flow
import * as React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import asyncAwait from 'redux-async-await'
import reducer from './reducers'
import Counter from './Counter'

export default function Application() {
  const store = createStore(reducer, applyMiddleware(asyncAwait))
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}
