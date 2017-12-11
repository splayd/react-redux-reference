// @flow
import * as React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import Counter from './Counter'

export default function Application() {
  const store = createStore(reducer, applyMiddleware(thunk))
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}
