import path from "path";
import { fileURLToPath, URL } from "url";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VUE_APP_");
  return {
    plugins: [
      legacy(),
      vue({
        template: {
          compilerOptions: {
            compatConfig: {
              MODE: 2
            }
          }
        }
      })
    ],
    resolve: {
      alias: {
        static: path.resolve(__dirname, "./public/static"),
        node_modules: path.resolve(__dirname, "./node_modules"),
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        scss: "@/scss",
        pages: "@/pages",
        components: "@/components",
        propstypes: "@/propstypes",
        utility: "@/utility",
        i18n: "@/i18n",
        stories: "@/stories",
        stores: "@/stores",
        templates: path.resolve(__dirname, "./templates"),
        vue: "@vue/compat"
      },
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"]
    },
    envPrefix: "VUE_APP_",
    server: {
      port: env.VUE_APP_PORT
    },
    test: {
      environment: "happy-dom"
    }
  };
});
