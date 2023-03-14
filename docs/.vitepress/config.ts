import { DefaultTheme, defineConfig } from 'vitepress';
import { getSidebar } from 'vitepress-plugin-auto-sidebar';

// @ts-ignore-next
import fs from 'node:fs';
// @ts-ignore-next
import path from 'node:path';

const excludeDirs = ['assets', '.vitepress'];

const contentDirs = fs
  // @ts-ignore-next
  .readdirSync(path.join(__dirname, '..'), { withFileTypes: true })
  .filter((file) => file.isDirectory())
  .map((dir) => dir.name)
  .filter((dir) => excludeDirs.includes(dir) === false);

console.log('Building for content dirs:');
console.log(contentDirs);

export default defineConfig({
  title: 'RPG Archive',
  description: 'For the cultured man',
  themeConfig: {
    aside: true,
    outline: 'deep',
    sidebar: getSidebar({
      contentRoot: 'docs',
      contentDirs: contentDirs,
      collapsible: true,
      collapsed: false,
    }) as DefaultTheme.Sidebar,
    editLink: {
      pattern: 'https://github.com/jobackman/rpg-archive/edit/main/docs/:path',
      text: 'Edit this page on Github',
    },
  },
  lastUpdated: true,
});
