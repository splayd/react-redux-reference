// @flow
import type { Action } from '../actions'

export default function(count: number = 0, action: Action): number {
  switch (action.type) {
    case 'INCREMENT':
      return count + 1
    case 'DECREMENT':
      return count - 1
    default:
      return count
  }
}
