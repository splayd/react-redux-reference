// @flow
import test from 'ava'
import { mount, waitForPromises } from './helpers'
import * as React from 'react'
import Application from '../src/ui/Application'

test('rendering Application', async t => {
  const application = mount(<Application />)

  t.is(application.find('.count').text(), '0')

  application.find('.increment').simulate('click')
  t.is(application.find('.count').text(), '1')

  application.find('.increment').simulate('click')
  t.is(application.find('.count').text(), '2')

  application.find('.decrement').simulate('click')
  t.is(application.find('.count').text(), '1')

  application.find('.slow-increment').simulate('click')
  await waitForPromises()
  t.is(application.find('.count').text(), '2')
})
