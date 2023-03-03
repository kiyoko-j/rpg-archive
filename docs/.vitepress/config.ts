import { defineConfig } from 'vitepress';
import { getSidebar } from 'vitepress-plugin-auto-sidebar';

export default defineConfig({
  title: 'RPG Archive',
  description: 'For the cultured man',
  themeConfig: {
    aside: true,
    outline: 'deep',
    sidebar: getSidebar({
      contentRoot: 'docs',
      contentDirs: ['dying-earth', 'horror-noire'],
      collapsible: true,
      collapsed: false,
    }),
    editLink: {
      pattern: 'https://github.com/jobackman/rpg-archive/edit/main/docs/:path',
      text: 'Edit this page on Github',
    },
  },
  lastUpdated: true,
});
