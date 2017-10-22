// @flow
import type { ChildProcess } from 'child_process'

export default function(
  childProcess: ChildProcess,
  text: string
): Promise<void> {
  return new Promise(resolve => {
    childProcess.stdout.on('data', data => {
      if (data.includes(text)) {
        resolve()
      }
    })
  })
}
