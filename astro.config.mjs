import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://techhound.ai",
  trailingSlash: "always",
  integrations: [
    tailwind(),
    sitemap({
      serialize(item) {
        if (item.url === "https://techhound.ai/") {
          item.priority = 1.0;
          item.changefreq = "weekly";
        } else if (item.url.includes("/blog/") && item.url !== "https://techhound.ai/blog/") {
          item.priority = 0.7;
          item.changefreq = "monthly";
        } else if (item.url === "https://techhound.ai/blog/") {
          item.priority = 0.8;
          item.changefreq = "weekly";
        } else if (item.url.includes("/services")) {
          item.priority = 0.9;
          item.changefreq = "monthly";
        } else {
          item.priority = 0.6;
          item.changefreq = "monthly";
        }
        return item;
      },
    }),
  ],
});
