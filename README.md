<div align="center">

# CMake Tools بالعربي لـ VS Code

<div align="center">

![Version](https://img.shields.io/badge/version-0.0.1-blue?style=for-the-badge&logo=github)
![VS Code](https://img.shields.io/badge/VS%20Code-1.88.0%2B-green?style=for-the-badge&logo=visual-studio-code)
[![License](https://img.shields.io/badge/license-MIT-orange?style=for-the-badge&logo=opensourceinitiative)](LICENSE.txt)

</div>

### نسخة عربية مبنية على CMake Tools لتسهيل الإعداد والبناء والتصحيح والاختبار داخل VS Code

<div align="center">

<img src="res/logo-margin-bottom.png" width="96" alt="CMake Tools Arabic Logo" />

</div>

</div>

---

## 📋 جدول المحتويات

<div align="center">

| القسم | الوصف |
|:-----:|:------|
| [🌟 نظرة عامة](#-نظرة-عامة) | فكرة المشروع وما الذي يضيفه |
| [✨ المميزات](#-المميزات) | أهم وظائف الإضافة |
| [📚 ملفات Docs](#-ملفات-docs) | ملفات التوثيق المرفقة |
| [🚀 أوامر سريعة](#-أوامر-سريعة) | أشهر أوامر CMake داخل VS Code |
| [📥 التثبيت](#-التثبيت) | التثبيت من ملف VSIX |
| [⚙️ التطوير والتجميع](#️-التطوير-والتجميع) | أوامر البناء والحزمة |
| [🔗 المصادر](#-المصادر) | مراجع CMake وVS Code |
| [🔗 روابط مهمة](#-روابط-مهمة) | روابط GitHub والإصدارات |
| [🤝 المساهمة](#-المساهمة) | فتح Issue أو Pull Request |
| [📄 الرخصة](#-الرخصة) | الترخيص والاعتماد |

</div>

---

<div align="center">

# 🌟 نظرة عامة

<div style="background: linear-gradient(135deg, #0f4c81 0%, #2e86c1 100%; padding: 22px; border-radius: 12px; color: white;">

> **CMake Tools بالعربي** هو fork عربي مبني على مشروع `microsoft/vscode-cmake-tools`، ويهدف إلى توفير نفس قدرات إدارة مشاريع CMake داخل VS Code مع توثيق عربي وتجهيز إصدار مستقل للنشر على GitHub كملف VSIX.

</div>

</div>

<div align="center">

| الفائدة | التفاصيل |
|:------:|:---------|
| ⚡ | تنفيذ سريع لأوامر Configure وBuild وDebug وCTest من داخل VS Code |
| 🎯 | دعم Presets وKits وTargets والمهام القابلة للتخصيص |
| 🧪 | تشغيل الاختبارات ومراقبة المخرجات والتشخيصات من نافذة Problems |
| 🌍 | README عربي وتجهيز إصدار مستقل باسم `cmake-tools-arabic` |

</div>

---

<div align="center">

# ✨ المميزات

</div>

### 1️⃣ إدارة مشاريع CMake

<div align="center">

| النقطة |
|:-------|
| ✅ اكتشاف مشاريع CMake وملفات `CMakeLists.txt` تلقائيًا |
| ✅ دعم `Configure Presets` و`Build Presets` و`Test Presets` و`Workflow Presets` |
| ✅ إدارة الـ Kits والـ build targets والـ launch targets بسهولة |

</div>

### 2️⃣ البناء والتصحيح والاختبار

<div align="center">

| النقطة |
|:-------|
| ✅ أوامر للبناء والتنظيف وإعادة التهيئة وتشغيل CPack وCTest |
| ✅ مصحح مدمج لسكربتات CMake |
| ✅ تشخيصات بناء ومطابقة أخطاء للمترجمات الشائعة داخل نافذة Problems |

</div>

### 3️⃣ تجربة تطوير متقدمة

<div align="center">

| النقطة |
|:-------|
| ✅ شريط حالة ومشاهد جانبية لمتابعة حالة المشروع |
| ✅ خدمات لغة CMake مدمجة مثل الإكمال والمعلومات السريعة |
| ✅ مهام VS Code قابلة للتخصيص وتكامل مع `cpp-devtools` |

</div>

### 4️⃣ تخصيص عربي لهذا الإصدار

<div align="center">

| النقطة |
|:-------|
| ✅ اسم حزمة مستقل: `cmake-tools-arabic` |
| ✅ README عربي للإصدار `0.0.1` |
| ✅ تجهيز ملف VSIX قابل للتثبيت والنشر عبر GitHub Releases |

</div>

---

<div align="center">

# 📚 ملفات Docs

</div>

<div align="center">

| الملف | الوصف |
|:-----:|:------|
| [docs/README.md](docs/README.md) | مدخل التوثيق الكامل |
| [docs/configure.md](docs/configure.md) | إعداد المشروع وتهيئته |
| [docs/build.md](docs/build.md) | البناء وإدارة الـ targets |
| [docs/debug.md](docs/debug.md) | التصحيح وتشغيل الأهداف |
| [docs/cmake-presets.md](docs/cmake-presets.md) | شرح CMake Presets |
| [docs/tasks.md](docs/tasks.md) | التكامل مع Tasks في VS Code |
| [docs/troubleshoot.md](docs/troubleshoot.md) | استكشاف الأخطاء وحلولها |
| [docs/kits.md](docs/kits.md) | إعداد Kits والمترجمات |

</div>

---

<div align="center">

# 🚀 أوامر سريعة

</div>

- `CMake: Configure`
- `CMake: Build`
- `CMake: Debug`
- `CMake: Run Tests`
- `CMake: Select Configure Preset`
- `CMake: Select Build Preset`
- `CMake: Scan for Kits`
- `CMake: Delete Cache and Reconfigure`

---

<div align="center">

# 📥 التثبيت

</div>

### المتطلبات

1. تثبيت [CMake](https://cmake.org/download/).
2. تثبيت [Visual Studio Code](https://code.visualstudio.com/).
3. التأكد من أن `cmake` موجود في `PATH` أو تحديده عبر الإعداد `cmake.cmakePath`.

### عبر ملف VSIX

```bash
code --install-extension cmake-tools-arabic-0.0.1.vsix
```

### ملاحظة

هذا المستودع يوفّر الإصدار الجاهز عبر GitHub Releases بدل الاعتماد على VS Code Marketplace في هذه النسخة.

---

<div align="center">

# ⚙️ التطوير والتجميع

</div>

```bash
yarn install
yarn run compile-production
./node_modules/.bin/vsce package --no-yarn -o cmake-tools-arabic-0.0.1.vsix
```

ينتج هذا المسار ملف الحزمة النهائي:

```text
cmake-tools-arabic-0.0.1.vsix
```

---

<div align="center">

# 🔗 المصادر

</div>

- CMake Downloads: https://cmake.org/download/
- CMake Documentation: https://cmake.org/documentation/
- VS Code C++ with CMake: https://code.visualstudio.com/docs/cpp/cmake-linux
- المستودع الأصلي: https://github.com/microsoft/vscode-cmake-tools

---

<div align="center">

# 🔗 روابط مهمة

</div>

<div align="center">

| الرابط | الوصف |
|:------:|:------|
| [GitHub](https://github.com/almhajer/cmake-tools-arabic) | المستودع الحالي |
| [Releases](https://github.com/almhajer/cmake-tools-arabic/releases) | الإصدارات وملفات VSIX |
| [Issues](https://github.com/almhajer/cmake-tools-arabic/issues) | الإبلاغ عن المشاكل |
| [Source Upstream](https://github.com/microsoft/vscode-cmake-tools) | المصدر الأصلي الذي بُني عليه هذا fork |

</div>

---

<div align="center">

# 🤝 المساهمة

</div>

- الإبلاغ عن مشكلة: https://github.com/almhajer/cmake-tools-arabic/issues
- إرسال Pull Request: https://github.com/almhajer/cmake-tools-arabic/pulls
- مراجعة إرشادات المساهمة: [CONTRIBUTING.md](CONTRIBUTING.md)

---

<div align="center">

# 📄 الرخصة

MIT — راجع [LICENSE.txt](LICENSE.txt)

هذا المشروع مبني على كود مشروع CMake Tools الأصلي وتبقى حقوق المصدر الأصلي محفوظة وفق نفس الترخيص.

</div>

---

<div align="center">

### إذا كان المشروع مفيدًا لك، أضف له نجمة على GitHub

نسخة عربية مخصّصة لمستخدمي VS Code وCMake

</div>
