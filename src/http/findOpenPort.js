// @flow
import getPort from 'get-port'

export default function(): Promise<number> {
  return getPort()
}
