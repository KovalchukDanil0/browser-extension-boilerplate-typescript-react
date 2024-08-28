import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import viteCopyTransformJson from "vite-plugin-transform-json";
import zipPack from "vite-plugin-zip-pack";
import pkg from "./package.json";
import rollupOptions from "./rollup.config";

const isProduction = process.env.NODE_ENV === "production";
const isChrome = process.env.BROWSER === "chrome";

export default defineConfig({
  plugins: [
    viteCopyTransformJson({
      srcPath: "src/manifest.json",
      async transformedProps() {
        const backgroundPagePath = "assets/background.js";

        return {
          version: pkg.version,
          description: pkg.description,
          homepage_url: pkg.repository.url || "",
          background: isChrome
            ? { service_worker: backgroundPagePath }
            : { page: backgroundPagePath },
        };
      },
    }),
    isProduction && [
      ViteImageOptimizer({
        /* pass your config */
      }),
      zipPack({ outDir: "zip", outFileName: `${pkg.name}.zip` }),
    ],
  ],
  build: {
    emptyOutDir: true,
    terserOptions: {
      format: {
        comments: false,
      },
    },
    rollupOptions,
  },
  esbuild: { legalComments: "none" },
});
