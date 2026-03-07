import * as vscode from 'vscode';

const rtlQuickPickDescriptionLanguageRe = /^(ar|fa|he|ur)(-|$)/i;

export function shouldUseQuickPickDetailForDescription(language: string = vscode.env.language): boolean {
    return rtlQuickPickDescriptionLanguageRe.test(language);
}

export function formatQuickPickItemForLocale<T extends vscode.QuickPickItem>(item: T): T {
    if (!shouldUseQuickPickDetailForDescription() || !item.description) {
        return item;
    }

    const detailParts = [item.description];
    if (item.detail) {
        detailParts.push(item.detail);
    }

    return {
        ...item,
        description: undefined,
        detail: detailParts.join(' | ')
    } as T;
}

export function formatQuickPickItemsForLocale<T extends vscode.QuickPickItem>(items: readonly T[]): T[] {
    return items.map(item => formatQuickPickItemForLocale(item));
}
