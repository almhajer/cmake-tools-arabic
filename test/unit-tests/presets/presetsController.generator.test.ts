import { expect } from 'chai';

import { selectConfigurePresetTemplateGenerator } from '@cmt/presets/presetTemplateGenerator';

suite('Configure preset template generator selection', () => {
    test('prefers Ninja when it is available', () => {
        const generator = selectConfigurePresetTemplateGenerator({
            platform: 'darwin',
            hasNinja: true,
            hasNinjaBuild: false,
            hasMake: true,
            hasMinGWMake: false,
            hasNMake: false,
            supportsDefaultGenerator: true
        });

        expect(generator).to.equal('Ninja');
    });

    test('falls back to Unix Makefiles on non-Windows hosts', () => {
        const generator = selectConfigurePresetTemplateGenerator({
            platform: 'darwin',
            hasNinja: false,
            hasNinjaBuild: false,
            hasMake: true,
            hasMinGWMake: false,
            hasNMake: false,
            supportsDefaultGenerator: true
        });

        expect(generator).to.equal('Unix Makefiles');
    });

    test('omits the generator when CMake can choose a default', () => {
        const generator = selectConfigurePresetTemplateGenerator({
            platform: 'linux',
            hasNinja: false,
            hasNinjaBuild: false,
            hasMake: false,
            hasMinGWMake: false,
            hasNMake: false,
            supportsDefaultGenerator: true
        });

        expect(generator).to.equal(undefined);
    });

    test('falls back to NMake on Windows when it is the only available tool', () => {
        const generator = selectConfigurePresetTemplateGenerator({
            platform: 'win32',
            hasNinja: false,
            hasNinjaBuild: false,
            hasMake: false,
            hasMinGWMake: false,
            hasNMake: true,
            supportsDefaultGenerator: false
        });

        expect(generator).to.equal('NMake Makefiles');
    });
});
