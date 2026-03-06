# CMake Tools بالعربي

![Version](https://img.shields.io/badge/version-0.0.2-blue?style=for-the-badge&logo=github)
![VS Code](https://img.shields.io/badge/VS%20Code-1.88.0%2B-green?style=for-the-badge&logo=visual-studio-code)
[![License](https://img.shields.io/badge/license-MIT-orange?style=for-the-badge&logo=opensourceinitiative)](https://github.com/almhajer/cmake-tools-arabic/blob/main/LICENSE.txt)

نسخة عربية مبنية على مشروع `microsoft/vscode-cmake-tools` لتسهيل إعداد وبناء وتصحيح واختبار مشاريع CMake داخل VS Code.

![CMake Tools Arabic Logo](https://github.com/almhajer/cmake-tools-arabic/raw/main/res/logo-margin-bottom.png)

## نظرة عامة

هذه الإضافة توفّر نفس القدرات الأساسية المعروفة في CMake Tools، مع تجهيز عربي للتوثيق وإصدار مستقل باسم `cmake-tools-arabic`.

أهم ما توفره:
- اكتشاف مشاريع `CMakeLists.txt`
- دعم `Configure Presets` و`Build Presets` و`Test Presets`
- إدارة `Kits` و`Targets`
- أوامر بناء وتصحيح واختبار من داخل VS Code
- تكامل مع `CTest` ونافذة `Problems`

## أوامر شائعة

- `CMake: Configure`
- `CMake: Build`
- `CMake: Debug`
- `CMake: Run Tests`
- `CMake: Select Configure Preset`
- `CMake: Select Build Preset`
- `CMake: Scan for Kits`
- `CMake: Delete Cache and Reconfigure`

## التثبيت

المتطلبات:
1. تثبيت [CMake](https://cmake.org/download/)
2. تثبيت [Visual Studio Code](https://code.visualstudio.com/)
3. التأكد من وجود `cmake` في `PATH` أو ضبط `cmake.cmakePath`

من Marketplace:

```bash
code --install-extension Arabic-language.cmake-tools-arabic
```

من ملف VSIX:

```bash
code --install-extension cmake-tools-arabic-0.0.2.vsix
```

## التطوير والتجميع

```bash
yarn install
yarn run compile-production
./node_modules/.bin/vsce package --no-yarn -o cmake-tools-arabic-0.0.2.vsix
```

## التوثيق

- [الدليل الرئيسي](https://github.com/almhajer/cmake-tools-arabic/blob/main/docs/README.md)
- [الإعداد والتهيئة](https://github.com/almhajer/cmake-tools-arabic/blob/main/docs/configure.md)
- [البناء](https://github.com/almhajer/cmake-tools-arabic/blob/main/docs/build.md)
- [التصحيح](https://github.com/almhajer/cmake-tools-arabic/blob/main/docs/debug.md)
- [CMake Presets](https://github.com/almhajer/cmake-tools-arabic/blob/main/docs/cmake-presets.md)
- [استكشاف الأخطاء](https://github.com/almhajer/cmake-tools-arabic/blob/main/docs/troubleshoot.md)

## روابط مهمة

- [GitHub](https://github.com/almhajer/cmake-tools-arabic)
- [Releases](https://github.com/almhajer/cmake-tools-arabic/releases)
- [Issues](https://github.com/almhajer/cmake-tools-arabic/issues)
- [المشروع الأصلي](https://github.com/microsoft/vscode-cmake-tools)

## المساهمة

- الإبلاغ عن مشكلة: https://github.com/almhajer/cmake-tools-arabic/issues
- إرسال Pull Request: https://github.com/almhajer/cmake-tools-arabic/pulls
- إرشادات المساهمة: [CONTRIBUTING.md](https://github.com/almhajer/cmake-tools-arabic/blob/main/CONTRIBUTING.md)

## الرخصة

هذا المشروع مرخص تحت رخصة MIT.
راجع [LICENSE.txt](https://github.com/almhajer/cmake-tools-arabic/blob/main/LICENSE.txt).
