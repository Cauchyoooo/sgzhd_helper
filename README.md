# sgzhd_helper - 静态站与 Vue3 (Vite)

**Project**
- 简要: 静态站 + Vue3 (Vite) 项目。网站源码位于子目录 `homepage`（仓库名仍为 `sgzhd_helper`），构建产物为 `homepage/dist`，通过 GitHub Actions 部署到 Pages（URL: https://<user>.github.io/sgzhd_helper）。

**Structure**
- 根目录保留：`.github/`、`README.md`、`.gitignore`。
- 源码与配置：`homepage/package.json`、`homepage/vite.config.js`、`homepage/src/`。
- CI workflow：`.github/workflows/deploy-pages.yml`（在子目录 `homepage` 下构建并上传 `homepage/dist`）。

**Quick Start — 本地开发**
1. 进入子项目并安装依赖/启动：
   - `cd homepage`
   - `npm ci`
   - `npm run dev`
2. 生产构建与预览：
   - `npm run build`
   - `npm run preview`

**Dev Notes / 注意事项**
- Vite `base` 应保持为 `/sgzhd_helper/`（部署为 project page 时使用仓库名作为路径基准）。
- 使用 `vue-router` 时请用 `createWebHistory(import.meta.env.BASE_URL)` 以兼容 base。
- 静态原样文件（不走构建）放在 `homepage/public/`；构建资源建议放 `homepage/src/assets/` 并通过 import 使用。
- CI 已配置为在 `homepage` 目录运行 `npm ci` + `npm run build`，上传 `homepage/dist` 并部署到 Pages。

**Troubleshooting**
- 如果 Pages 显示非期望内容（例如 README），请检查 Actions 上传的 artifact 内容（是否为 `homepage/dist`），以及 `vite.config.js` 的 `base` 是否正确。
