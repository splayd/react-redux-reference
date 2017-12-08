// @flow

export type IncrementAction = { type: 'INCREMENT' }

export default function(): IncrementAction {
  return {
    type: 'INCREMENT'
  }
}
