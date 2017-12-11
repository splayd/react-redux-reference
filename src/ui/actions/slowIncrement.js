// @flow
import type { IncrementAction } from './increment'

export default function(): (
  dispatch: (IncrementAction) => void
) => Promise<void> {
  return async dispatch => {
    await Promise.resolve()
    dispatch({ type: 'INCREMENT' })
  }
}
