// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.SITE_URL || "https://zzinlee.dev",
  integrations: [sitemap()],
});
