// @flow
import type { IncrementAction } from './increment'

export default async function(): Promise<IncrementAction> {
  await Promise.resolve()
  return { type: 'INCREMENT' }
}
