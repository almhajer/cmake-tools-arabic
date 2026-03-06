export interface ConfigurePresetTemplateGeneratorSelectionOptions {
    platform: NodeJS.Platform;
    hasNinja: boolean;
    hasNinjaBuild: boolean;
    hasMake: boolean;
    hasMinGWMake: boolean;
    hasNMake: boolean;
    supportsDefaultGenerator: boolean;
}

export function selectConfigurePresetTemplateGenerator(options: ConfigurePresetTemplateGeneratorSelectionOptions): string | undefined {
    if (options.hasNinja || options.hasNinjaBuild) {
        return 'Ninja';
    }

    if (options.platform !== 'win32' && options.hasMake) {
        return 'Unix Makefiles';
    }

    if (options.platform === 'win32' && options.hasMinGWMake) {
        return 'MinGW Makefiles';
    }

    if (options.platform === 'win32' && options.hasNMake) {
        return 'NMake Makefiles';
    }

    if (options.supportsDefaultGenerator) {
        return undefined;
    }

    return 'Ninja';
}
