import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://erickaraujodados.com.br',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
