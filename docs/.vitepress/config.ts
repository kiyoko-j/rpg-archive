import { defineConfig } from 'vitepress';
import { getSidebar } from 'vitepress-plugin-auto-sidebar';

export default defineConfig({
  title: 'RPG Archive',
  description: 'For the cultured man',
  themeConfig: {
    sidebar: getSidebar({
      contentRoot: 'docs',
      contentDirs: ['dying-earth', 'horror-noire'],
      collapsible: true,
      collapsed: false,
    }),
  },
});
