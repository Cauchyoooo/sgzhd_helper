import { fileURLToPath, URL } from "node:url"
import { defineConfig, loadEnv } from "vite"
import vue from "@vitejs/plugin-vue"
import vueDevTools from "vite-plugin-vue-devtools"

// mode 会由 Vite 提供（dev -> development, build -> production）
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const base = env.VITE_BASE || '/'
  return defineConfig({
    base,
    plugins: [
      vue(),
      vueDevTools(),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url))
      },
    },
  })
}