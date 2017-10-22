// @flow
import type { ChildProcess } from 'child_process'

export default async function(childProcess: ChildProcess): Promise<void> {
  childProcess.kill()
  await new Promise(resolve => {
    childProcess.on('exit', resolve)
  })
}
