# sgzhd_helper - 静态站与 Vue3 (Vite)

**Project**
- 简要: 静态站 + Vue3 (Vite) 项目。网站源码位于子目录 [sgzhd_helper](sgzhd_helper)，构建产物为 `sgzhd_helper/dist`，通过 GitHub Actions 部署到 Pages.

**Structure**
- 根目录保留：`.github/`、`README.md`、`.gitignore`。
- 源码与配置：[sgzhd_helper/package.json](sgzhd_helper/package.json)、[sgzhd_helper/vite.config.js](sgzhd_helper/vite.config.js)、[sgzhd_helper/src/](sgzhd_helper/src/)。
- CI workflow：[.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml)（在子目录 `sgzhd_helper` 下构建并上传 `sgzhd_helper/dist`）。

**Quick Start — 本地开发**
1. 进入子项目并安装依赖/启动：
   - `cd sgzhd_helper`
   - `npm ci`
   - `npm run dev`
2. 生产构建与预览：
   - `npm run build`
   - `npm run preview`

**Dev Notes / 注意事项**
- Vite `base` 已设置为 `/sgzhd_helper/`，确保在 [sgzhd_helper/vite.config.js](sgzhd_helper/vite.config.js) 保持一致，部署到 GitHub Pages 的 project page 时必须使用该 base。
- 使用 `vue-router` 时请用 `createWebHistory(import.meta.env.BASE_URL)` 以兼容 base。
- 静态原样文件（不走构建）放在 `sgzhd_helper/public/`；构建资源建议放 `src/assets/` 并通过 import 使用。
- CI 已配置为在 `sgzhd_helper` 目录运行 `npm ci` + `npm run build`，上传 `sgzhd_helper/dist` 并部署到 Pages；提交到 `main` 或手动触发 workflow 均会部署。
- 根目录 `public/` 如果不再使用，建议先备份（例如重命名为 `public.bak`），再删除以免混淆部署目录。

**Troubleshooting**
- Actions 报错请先查看构建日志（是否在子目录执行、Node 版本、构建脚本）。若 Pages 404，检查 `base` 与 Pages 类型（project vs user）是否匹配。
