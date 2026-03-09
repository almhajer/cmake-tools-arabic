<div align="center">

# 🔧 Arabic CMake Tools

<div align="center">

![Version](https://img.shields.io/badge/version-0.0.2-blue?style=for-the-badge&logo=visual-studio-code)
![VS Code](https://img.shields.io/badge/VS%20Code-1.88.0%2B-green?style=for-the-badge&logo=visual-studio-code)
[![License](https://img.shields.io/badge/license-MIT-orange?style=for-the-badge&logo=opensourceinitiative)](LICENSE.txt)

</div>

### نسخة عربية مبنية على مشروع `microsoft/vscode-cmake-tools` لتسهيل إعداد وبناء وتصحيح واختبار مشاريع CMake داخل VS Code

<div align="center">

<img src="https://github.com/almhajer/cmake-tools-arabic/raw/main/res/logo-margin-bottom.png"  alt="CMake Tools Arabic Logo" />

</div>

</div>

---

## 📋 جدول المحتويات

<div align="center">

| القسم | الوصف |
|:-----:|:------|
| [🌟 نظرة عامة](#-نظرة-عامة) | فكرة الإضافة ومشكلتها |
| [✨ المميزات](#-المميزات) | القدرات الأساسية |
| [📚 التوثيق](#-التوثيق) | روابط التوثيق الشامل |
| [🚀 أوامر شائعة](#-أوامر-شائعة) | أوامر CMake الأساسية |
| [📥 التثبيت](#-التثبيت) | من المتجر أو عبر VSIX |
| [⚙️ التطوير والتجميع](#️-التطوير-والتجميع) | بناء الإضافة محليًا |
| [🔗 روابط مهمة](#-روابط-مهمة) | روابط المشروع والمنصة |
| [🤝 المساهمة](#-المساهمة) | طريقة المساهمة |
| [📄 الرخصة](#-الرخصة) | معلومات الترخيص |

</div>

---

<div align="center">

# 🌟 نظرة عامة

<div style="background: linear-gradient(135deg, #0f4c81 0%, #3a7bd5 100%); padding: 22px; border-radius: 12px; color: white;">

> **Arabic CMake Tools** هي إضافة VS Code توفّر نفس القدرات الأساسية المعروفة في CMake Tools، مع تجهيز عربي للتوثيق وإصدار مستقل باسم `arabic-cMake-tools`.

</div>

</div>

<div align="center">

| الفائدة | التفاصيل |
|:------:|:---------|
| 🔍 | اكتشاف مشاريع `CMakeLists.txt` تلقائيًا |
| ⚙️ | دعم `Configure Presets` و`Build Presets` و`Test Presets` |
| 🛠️ | إدارة `Kits` و`Targets` بسهولة |
| 🧪 | أوامر بناء وتصحيح واختبار من داخل VS Code |
| ✅ | تكامل مع `CTest` ونافذة `Problems` |

</div>

---

<div align="center">

# ✨ المميزات

</div>

### 1️⃣ اكتشاف المشاريع

<div align="center">

| النقطة |
|:-------|
| ✅ اكتشاف تلقائي لملفات `CMakeLists.txt` |
| ✅ دعم المشاريع متعددة المجلدات |
| ✅ تكوين تلقائي للمشروع |

</div>

### 2️⃣ إدارة Presets

<div align="center">

| النقطة |
|:-------|
| ✅ دعم `CMakePresets.json` و`CMakeUserPresets.json` |
| ✅ اختيار Configure/Build/Test Presets |
| ✅ تكامل مع إعدادات VS Code |

</div>

### 3️⃣ البناء والتصحيح

<div align="center">

| النقطة |
|:-------|
| ✅ بناء targets محددة أو المشروع بالكامل |
| ✅ تصحيح الأخطاء مع تكامل LLDB/GDB/Visual Studio |
| ✅ تشغيل الاختبارات عبر CTest |

</div>

---

<div align="center">

# 📚 التوثيق

</div>

<div align="center">

| الملف | الوصف |
|:-----:|:------|
| [docs/README.md](docs/README.md) | الدليل الرئيسي |
| [docs/configure.md](docs/configure.md) | الإعداد والتهيئة |
| [docs/build.md](docs/build.md) | البناء |
| [docs/debug.md](docs/debug.md) | التصحيح |
| [docs/cmake-presets.md](docs/cmake-presets.md) | CMake Presets |
| [docs/troubleshoot.md](docs/troubleshoot.md) | استكشاف الأخطاء |

</div>

---

<div align="center">

# 🚀 أوامر شائعة

</div>

<div align="center">

| الأمر | الوصف |
|:-----:|:------|
| `CMake: Configure` | تكوين المشروع |
| `CMake: Build` | بناء المشروع |
| `CMake: Debug` | تصحيح الأخطاء |
| `CMake: Run Tests` | تشغيل الاختبارات |
| `CMake: Select Configure Preset` | اختيار preset التكوين |
| `CMake: Select Build Preset` | اختيار preset البناء |
| `CMake: Scan for Kits` | البحث عن Kits |
| `CMake: Delete Cache and Reconfigure` | حذف الكاش وإعادة التكوين |

</div>

---

<div align="center">

# 📥 التثبيت

</div>

### المتطلبات

1. تثبيت [CMake](https://cmake.org/download/)
2. تثبيت [Visual Studio Code](https://code.visualstudio.com/)
3. التأكد من وجود `cmake` في `PATH` أو ضبط `cmake.cmakePath`

### من VS Code Marketplace

1. افتح VS Code.
2. افتح `Extensions`.
3. ابحث عن `Arabic CMake Tools`.
4. اضغط Install.

### عبر سطر الأوامر

```bash
code --install-extension Arabic-language.arabic-cMake-tools
```

### عبر VSIX

```bash
code --install-extension arabic-cMake-tools-0.0.2.vsix
```

---

<div align="center">

# ⚙️ التطوير والتجميع

</div>

```bash
# تثبيت التبعيات
yarn install

# بناء المشروع
yarn run compile-production

# إنشاء ملف VSIX
./node_modules/.bin/vsce package --no-yarn -o arabic-cMake-tools-0.0.2.vsix
```

---

<div align="center">

# 🔗 روابط مهمة

</div>

<div align="center">

| الرابط | الوصف |
|:------:|:------|
| [GitHub](https://github.com/almhajer/cmake-tools-arabic) | المستودع الرسمي |
| [VS Marketplace](https://marketplace.visualstudio.com/items?itemName=Arabic-language.arabic-cMake-tools) | صفحة الإضافة |
| [Releases](https://github.com/almhajer/cmake-tools-arabic/releases) | الإصدارات |
| [Issues](https://github.com/almhajer/cmake-tools-arabic/issues) | الإبلاغ عن مشاكل |
| [المشروع الأصلي](https://github.com/microsoft/vscode-cmake-tools) | مشروع Microsoft الأصلي |
| [All Extensions](https://marketplace.visualstudio.com/publishers/Arabic-language) | جميع إضافات الناشر |

</div>

---

<div align="center">

# 🤝 المساهمة

</div>

- الإبلاغ عن مشكلة: https://github.com/almhajer/cmake-tools-arabic/issues
- إرسال Pull Request: https://github.com/almhajer/cmake-tools-arabic/pulls
- إرشادات المساهمة: [CONTRIBUTING.md](CONTRIBUTING.md)

---

<div align="center">

# 📄 الرخصة

MIT — راجع [LICENSE.txt](LICENSE.txt)

</div>

---

<div align="center">

### 🌟 إذا أعجبك المشروع، لا تنسَ إضافة ⭐!

**صنع بـ ❤️ للمجتمع العربي**

</div>
