// @flow

export type DecrementAction = { type: 'DECREMENT' }

export default function(): DecrementAction {
  return {
    type: 'DECREMENT'
  }
}
