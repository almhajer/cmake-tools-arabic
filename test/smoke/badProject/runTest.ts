import * as path from 'path';

import { runTests } from '@vscode/test-electron';
import { resolveVSCodeTestExecutablePath } from '../../helpers/vscodeTestRunner';

async function main() {
    try {
        // The folder containing the Extension Manifest package.json
        // Passed to `--extensionDevelopmentPath`
        const extensionDevelopmentPath = path.resolve(__dirname, '../../../../');
        const extensionTestsEnv: { [key: string]: string | undefined } = { "CMT_TESTING": "1", "CMT_QUIET_CONSOLE": "1" };

        // The path to the extension test runner script
        const extensionTestsPath = path.resolve(__dirname, './index');
        const testWorkspace = path.resolve(extensionDevelopmentPath, 'test/smoke/badProject');
        const launchArgs = ["--disable-extensions", testWorkspace];
        const vscodeExecutablePath = await resolveVSCodeTestExecutablePath(extensionDevelopmentPath);
        await runTests({ vscodeExecutablePath, launchArgs, extensionDevelopmentPath, extensionTestsPath, extensionTestsEnv });

    } catch (err) {
        console.error(err);
        console.error('Failed to run tests');
        process.exit(1);
    }
}

void main();
