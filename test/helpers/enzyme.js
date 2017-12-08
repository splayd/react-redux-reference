// @flow
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { JSDOM } from 'jsdom'

Enzyme.configure({ adapter: new Adapter() })

const { window } = new JSDOM(`
  <!doctype html>
  <meta charset="utf-8">
`)

global.window = window
for (const property of Reflect.ownKeys(window)) {
  Reflect.defineProperty(
    global,
    property,
    Reflect.getOwnPropertyDescriptor(window, property)
  )
}

export { shallow, mount } from 'enzyme'
