import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Flotes Documentation",
      customCss: ["./src/tailwind.css"],
      logo: {
        replacesTitle: true,
        dark: "./src/assets/logo-dark-1.svg",
        light: "./src/assets/logo-light-1.svg",
      },
      social: {
        github: "https://github.com/everduin94",
        discord: "https://discord.gg/qKaKeGT8sZ",
      },
      sidebar: [
        {
          label: "Getting Started",
          autogenerate: { directory: "getting-started" },
        },
        {
          label: "Concepts",
          items: [
            { label: "Write", link: "/concepts/write" },
            { label: "Organize", link: "/concepts/organize" },
            { label: "Learn", link: "/concepts/learn" },
          ],
        },
        {
          label: "Components",
          items: [
            { label: "Notebooks", link: "/guides/notebooks" },
            { label: "Notes", link: "/guides/notes" },
            { label: "Study", link: "/guides/study" },
            { label: "Stats", link: "/guides/stats" },
            { label: "Spaced Repetition", link: "/guides/spaced-repetition" },
            { label: "Archives", link: "/guides/archives" },
            { label: "Sharing", link: "/guides/sharing" },
            { label: "Tags", link: "/guides/tags" },
            { label: "Resources", link: "/guides/resources" },
            { label: "Webhooks", link: "/guides/webhooks" },
          ],
        },
        {
          label: "Pro",
          items: [{ label: "Intro", link: "/pro/intro" }],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
        {
          label: "About",
          items: [
            { label: "Contact", link: "/about/contact" },
            { label: "Terms of Service", link: "/about/tos" },
            { label: "Privacy Policy", link: "/about/privacy" },
          ],
        },
      ],
    }),
    tailwind({
      // Disable the default base styles:
      applyBaseStyles: false,
    }),
  ],
});
