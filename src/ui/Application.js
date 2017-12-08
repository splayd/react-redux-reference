// @flow
import * as React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import Counter from './Counter'

export default function Application() {
  const store = createStore(reducer)
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}
