# Changelog

## 0.0.5

- Fix the fork activation failure caused by hardcoded self-references to `ms-vscode.cmake-tools`.
- Resolve the current extension ID dynamically for activation, settings, and cpptools integration.

## 0.0.4

- Register CMake commands before the heavier extension initialization finishes.
- Prevent activation failures from surfacing as `command not found` for `cmake.quickStart`.
- Keep activation resilient even if a non-critical initialization step fails.

## 0.0.3

- Add the missing activation event for `cmake.quickStart`.
- Fix the `command 'cmake.quickStart' not found` error when using Quick Start in an empty workspace.

## 0.0.2

- Simplify Marketplace metadata to avoid rendering issues in the Marketplace web page.
- Replace the long inherited changelog with a short fork-specific changelog.
- Simplify the Arabic README for better compatibility with Marketplace rendering.

## 0.0.1

- Initial Arabic fork release of `cmake-tools-arabic`.
