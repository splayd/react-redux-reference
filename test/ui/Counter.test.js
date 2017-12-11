// @flow
import test from 'ava'
import td from 'testdouble'
import { shallow } from '../helpers'
import * as React from 'react'
import { Counter } from '../../src/ui/Counter'

test('keeping a count', t => {
  const increment = td.function()
  const decrement = td.function()
  const slowIncrement = td.function()
  const counter = shallow(
    <Counter
      count={10}
      increment={increment}
      decrement={decrement}
      slowIncrement={slowIncrement}
    />
  )

  t.is(counter.find('.count').text(), '10')

  counter.find('.increment').simulate('click')
  td.verify(increment())

  counter.find('.decrement').simulate('click')
  td.verify(decrement())

  counter.find('.slow-increment').simulate('click')
  td.verify(slowIncrement())
})
