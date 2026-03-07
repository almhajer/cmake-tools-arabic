import { downloadAndUnzipVSCode, resolveCliPathFromVSCodeExecutablePath } from '@vscode/test-electron';

export async function resolveVSCodeTestExecutablePath(extensionDevelopmentPath: string): Promise<string> {
    const executableFromEnv = process.env.VSCODE_TEST_CLI ?? process.env.VSCODE_TEST_PATH;
    if (executableFromEnv) {
        return executableFromEnv;
    }

    const vscodeExecutablePath = await downloadAndUnzipVSCode({ extensionDevelopmentPath });
    return resolveCliPathFromVSCodeExecutablePath(vscodeExecutablePath);
}
