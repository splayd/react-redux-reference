// @flow
import test from 'ava'
import { mount } from '../helpers'
import * as React from 'react'
import Application from '../../src/ui/Application'

test('rendering the Redux application', t => {
  const application = mount(<Application />)

  t.is(application.find('.count').text(), '0')

  application.find('.increment').simulate('click')
  t.is(application.find('.count').text(), '1')
})
