import adapter from "@sveltejs/adapter-node";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { preprocessMeltUI, sequence } from "@melt-ui/pp";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Your preprocessors are unchanged and correct.
  preprocess: sequence([vitePreprocess(), preprocessMeltUI()]),

  kit: {
    // 2. The adapter is now set to adapter-node with no special options.
    adapter: adapter(),

    // Your custom file paths are unchanged and correct.
    files: {
      routes: "src/routes-sw",
    },
  },
};

export default config;