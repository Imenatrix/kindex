import { spawn } from 'child_process'
import type { ChildProcessWithoutNullStreams } from 'child_process'

let process : ChildProcessWithoutNullStreams

export const actions = {
    run : async () => {
        process = spawn('node', ['run.js'])
        process.stdout.on('data', (data) => {
            console.log(data.toString().replace('\n', ''))
        })
    },
    stop : async () => {
        console.log('Killing')
        const result = process.kill()
        console.log('Killed? ' + result)
    }
}
