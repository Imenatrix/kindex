import { exec } from 'child_process'
import type { ChildProcess } from 'child_process'

let process : ChildProcess

export const actions = {
    run : async () => {
        process = exec('node run.js', (error, stdout, stderr) => {
            console.log('error: ' + error)
            console.log('stdout: ' + stdout)
            console.log('stderr: ' + stderr)
        })
    },
    stop : async () => {
        console.log('Killing')
        const result = process.kill()
        console.log('Killed? ' + result)
    }
}
