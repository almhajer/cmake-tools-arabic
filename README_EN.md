<div align="center">

# 🔧 Arabic CMake Tools

<div align="center">

![Version](https://img.shields.io/badge/version-0.0.2-blue?style=for-the-badge&logo=visual-studio-code)
![VS Code](https://img.shields.io/badge/VS%20Code-1.88.0%2B-green?style=for-the-badge&logo=visual-studio-code)
[![License](https://img.shields.io/badge/license-MIT-orange?style=for-the-badge&logo=opensourceinitiative)](LICENSE.txt)

</div>

### An Arabic-localized fork of `microsoft/vscode-cmake-tools` for configuring, building, debugging, and testing CMake projects in VS Code

<div align="center">

<img src="https://github.com/almhajer/cmake-tools-arabic/raw/main/res/logo-margin-bottom.png" alt="CMake Tools Arabic Logo" />

</div>

</div>

---

## 📋 Table of Contents

<div align="center">

| Section | Description |
|:-----:|:------|
| [🌟 Overview](#-overview) | Extension concept and purpose |
| [✨ Features](#-features) | Core capabilities |
| [📚 Documentation](#-documentation) | Documentation links |
| [🚀 Common Commands](#-common-commands) | Basic CMake commands |
| [📥 Installation](#-installation) | From Marketplace or VSIX |
| [⚙️ Development & Build](#️-development--build) | Building the extension locally |
| [🔗 Important Links](#-important-links) | Project and platform links |
| [🤝 Contributing](#-contributing) | How to contribute |
| [📄 License](#-license) | License information |

</div>

---

<div align="center">

# 🌟 Overview

<div style="background: linear-gradient(135deg, #0f4c81 0%, #3a7bd5 100%); padding: 22px; border-radius: 12px; color: white;">

> **Arabic CMake Tools** is a VS Code extension providing the same core capabilities as CMake Tools, with Arabic documentation support and an independent release as `arabic-cMake-tools`.

</div>

</div>

<div align="center">

| Benefit | Details |
|:------:|:---------|
| 🔍 | Auto-discovery of `CMakeLists.txt` projects |
| ⚙️ | Support for `Configure Presets`, `Build Presets`, and `Test Presets` |
| 🛠️ | Easy management of `Kits` and `Targets` |
| 🧪 | Build, debug, and test commands from within VS Code |
| ✅ | Integration with `CTest` and the `Problems` panel |

</div>

---

<div align="center">

# ✨ Features

</div>

### 1️⃣ Project Discovery

<div align="center">

| Point |
|:-------|
| ✅ Automatic detection of `CMakeLists.txt` files |
| ✅ Support for multi-folder workspaces |
| ✅ Automatic project configuration |

</div>

### 2️⃣ Presets Management

<div align="center">

| Point |
|:-------|
| ✅ Support for `CMakePresets.json` and `CMakeUserPresets.json` |
| ✅ Select Configure/Build/Test Presets |
| ✅ Integration with VS Code settings |

</div>

### 3️⃣ Build & Debug

<div align="center">

| Point |
|:-------|
| ✅ Build specific targets or the entire project |
| ✅ Debug with LLDB/GDB/Visual Studio integration |
| ✅ Run tests via CTest |

</div>

---

<div align="center">

# 📚 Documentation

</div>

<div align="center">

| File | Description |
|:-----:|:------|
| [docs/README.md](docs/README.md) | Main guide |
| [docs/configure.md](docs/configure.md) | Configuration |
| [docs/build.md](docs/build.md) | Building |
| [docs/debug.md](docs/debug.md) | Debugging |
| [docs/cmake-presets.md](docs/cmake-presets.md) | CMake Presets |
| [docs/troubleshoot.md](docs/troubleshoot.md) | Troubleshooting |

</div>

---

<div align="center">

# 🚀 Common Commands

</div>

<div align="center">

| Command | Description |
|:-----:|:------|
| `CMake: Configure` | Configure the project |
| `CMake: Build` | Build the project |
| `CMake: Debug` | Debug the project |
| `CMake: Run Tests` | Run tests |
| `CMake: Select Configure Preset` | Select configure preset |
| `CMake: Select Build Preset` | Select build preset |
| `CMake: Scan for Kits` | Scan for kits |
| `CMake: Delete Cache and Reconfigure` | Delete cache and reconfigure |

</div>

---

<div align="center">

# 📥 Installation

</div>

### Requirements

1. Install [CMake](https://cmake.org/download/)
2. Install [Visual Studio Code](https://code.visualstudio.com/)
3. Ensure `cmake` is in your `PATH` or set `cmake.cmakePath`

### From VS Code Marketplace

1. Open VS Code.
2. Open `Extensions`.
3. Search for `Arabic CMake Tools`.
4. Click Install.

### Via Command Line

```bash
code --install-extension Arabic-language.arabic-cMake-tools
```

### Via VSIX

```bash
code --install-extension arabic-cMake-tools-0.0.2.vsix
```

---

<div align="center">

# ⚙️ Development & Build

</div>

```bash
# Install dependencies
yarn install

# Build the project
yarn run compile-production

# Create VSIX package
./node_modules/.bin/vsce package --no-yarn -o arabic-cMake-tools-0.0.2.vsix
```

---

<div align="center">

# 🔗 Important Links

</div>

<div align="center">

| Link | Description |
|:------:|:------|
| [GitHub](https://github.com/almhajer/cmake-tools-arabic) | Official repository |
| [VS Marketplace](https://marketplace.visualstudio.com/items?itemName=Arabic-language.arabic-cMake-tools) | Extension page |
| [Releases](https://github.com/almhajer/cmake-tools-arabic/releases) | Releases |
| [Issues](https://github.com/almhajer/cmake-tools-arabic/issues) | Report issues |
| [Original Project](https://github.com/microsoft/vscode-cmake-tools) | Microsoft's original project |
| [All Extensions](https://marketplace.visualstudio.com/publishers/Arabic-language) | All publisher extensions |

</div>

---

<div align="center">

# 🤝 Contributing

</div>

- Report an issue: https://github.com/almhajer/cmake-tools-arabic/issues
- Submit a Pull Request: https://github.com/almhajer/cmake-tools-arabic/pulls
- Contributing guidelines: [CONTRIBUTING.md](CONTRIBUTING.md)

---

<div align="center">

# 📄 License

MIT — See [LICENSE.txt](LICENSE.txt)

</div>

---

<div align="center">

### 🌟 If you like this project, please consider giving it a ⭐!

**Made with ❤️ for the Arabic community**

</div>
