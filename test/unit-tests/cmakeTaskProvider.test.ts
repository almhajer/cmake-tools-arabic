import { CustomBuildTaskTerminal, CommandType } from '@cmt/cmakeTaskProvider';
import * as proc from '@cmt/proc';
import { expect } from '@test/util';

class RecordingConsumer implements proc.OutputConsumer {
    readonly stdout: string[] = [];
    readonly stderr: string[] = [];

    output(line: string): void {
        this.stdout.push(line);
    }

    error(line: string): void {
        this.stderr.push(line);
    }
}

suite('CMake task provider', () => {
    test('CustomBuildTaskTerminal forwards process output to an external consumer', () => {
        const forwarded = new RecordingConsumer();
        const terminal = new CustomBuildTaskTerminal(CommandType.build, ['all'], undefined, undefined, undefined, forwarded);

        terminal.output('[1/2] Building CXX object');
        terminal.error('main.cpp:10: error: broken');

        expect(forwarded.stdout).to.deep.eq(['[1/2] Building CXX object']);
        expect(forwarded.stderr).to.deep.eq(['main.cpp:10: error: broken']);
        expect(terminal.stdout).to.eq('[1/2] Building CXX object');
        expect(terminal.stderr).to.eq('main.cpp:10: error: broken');
    });
});
