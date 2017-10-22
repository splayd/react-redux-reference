// @flow
import type { ChildProcess } from 'child_process'
import { spawn } from 'child_process'

export default function(
  command: string,
  ...args: Array<string | number>
): ChildProcess {
  return spawn(command, args.map(arg => arg.toString()))
}
