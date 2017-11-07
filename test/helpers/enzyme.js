// @flow
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { JSDOM } from 'jsdom'

configure({ adapter: new Adapter() })

const { window } = new JSDOM('<!doctype html>')
global.window = window
for (const property of Object.getOwnPropertyNames(window)) {
  if (typeof global[property] === 'undefined') {
    Object.defineProperty(
      global,
      property,
      Object.getOwnPropertyDescriptor(window, property)
    )
  }
}

export { shallow, mount } from 'enzyme'
