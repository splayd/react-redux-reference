// @flow
import type { IncrementAction } from './increment'
import type { DecrementAction } from './decrement'

export type Action = IncrementAction | DecrementAction

export { default as increment } from './increment'
export { default as decrement } from './decrement'

export { default as slowIncrement } from './slowIncrement'
