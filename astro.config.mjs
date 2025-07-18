// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import catppuccin from "@catppuccin/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [catppuccin({ dark: { flavor: "mocha", accent: "sky" },    light: { flavor: "latte", accent: "sky" }, })],
      title: "Flotes Docs",
      logo: {
        src: "./public/favicon.svg",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/everduin94",
        },
        {
          icon: "discord",
          label: "Discord",
          href: "https://discord.gg/uARTASUtX2"
        }
      ],
      sidebar: [
        {
          label: "Getting Started",
          items: [
            { label: "Introduction", slug: "getting-started/introduction" },
          ],
        },
        {
          label: "Concepts",
          items: [
            { label: "Notes", slug: "concepts/notes" },
            { label: "Notebooks", slug: "concepts/notebooks" },
            { label: "Views", slug: "concepts/views" },
            { label: "Backlinks", slug: "concepts/backlinks" },
            { label: "Categories", slug: "concepts/categories" },
            { label: "Review", slug: "concepts/review" },
          ],
        },
        {
          label: "Reference",
          items: [
            { label: "Markdown", slug: "reference/markdown" },
            { label: "Pro Features", slug: "reference/pro-features" },
            { label: "Webhooks (Integrations)", slug: "reference/webhooks" },
            { label: "Google Calendar Integration", slug: "reference/google-calendar-webhook" },
          ],

        },
        {
          label: "About",
          items: [
            { label: "Contact", slug: "about/contact" },
            { label: "Privacy", slug: "about/privacy" },
            { label: "Terms of Service", slug: "about/tos" },
          ],
        },
      ],
    }),
  ],
});
