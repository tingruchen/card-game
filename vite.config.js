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
        "@": path.resolve(__dirname, "./src"),
        scss: path.resolve(__dirname, "./src/scss"),
        pages: path.resolve(__dirname, "./src/pages"),
        components: path.resolve(__dirname, "./src/components"),
        propstypes: path.resolve(__dirname, "./src/propstypes"),
        utility: path.resolve(__dirname, "./src/utility"),
        i18n: path.resolve(__dirname, "./src/i18n"),
        stories: path.resolve(__dirname, "./src/stories"),
        stores: path.resolve(__dirname, "./src/stores"),
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
