import { crx, CrxPlugin } from "@crxjs/vite-plugin";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import zipPack from "vite-plugin-zip-pack";
import manifest from "./manifest.config";
import { name, version } from "./package.json";
import rollupOptions from "./rollup.config";

const isWatch = process.argv.includes("--watch");

// ! ADD SUPPORT BUILD TO FIREFOX
const isChrome = process.env.BROWSER === "chrome";

const viteManifestHackIssue846: CrxPlugin = {
  // Workaround from https://github.com/crxjs/chrome-extension-tools/issues/846#issuecomment-1861880919.
  name: "manifestHackIssue846",
  renderCrxManifest(_manifest, bundle) {
    bundle["manifest.json"] = bundle[".vite/manifest.json"];
    bundle["manifest.json"].fileName = "manifest.json";
    delete bundle[".vite/manifest.json"];
    return null;
  },
};

export default defineConfig({
  plugins: [
    react(),

    viteManifestHackIssue846,
    crx({
      manifest,
      contentScripts: {
        injectCss: true,
      },
    }),

    !isWatch && [
      ViteImageOptimizer(),
      zipPack({ outDir: "zip", outFileName: `${name}-${version}.zip` }),
    ],
  ],
  build: {
    minify: "esbuild",
    emptyOutDir: true,
    rollupOptions,
  },
  esbuild: { legalComments: "none" },
});
