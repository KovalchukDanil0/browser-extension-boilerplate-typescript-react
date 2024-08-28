import { resolve } from "path";
import { defineConfig } from "rollup";

type ResourceExtType = "html" | "ts";

function getPathToResource(name: string, ext: ResourceExtType = "html") {
  return resolve("src", "pages", name, `index.${ext}`);
}

export default defineConfig({
  input: {
    popup: getPathToResource("popup"),
    options: getPathToResource("options"),
    devtools: getPathToResource("devtools"),
    newtab: getPathToResource("newtab"),
    panel: getPathToResource("panel"),
    content: getPathToResource("content", "ts"),
    background: getPathToResource("background", "ts"),
  },
  output: {
    entryFileNames: `assets/[name].js`,
    chunkFileNames: `assets/[name].js`,
    assetFileNames: `assets/[name].[ext]`,
  },
  external: ["/public/scriptLayout.ts"],
});
