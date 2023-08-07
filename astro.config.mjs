import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import netlify from '@astrojs/netlify/functions';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),
  integrations: [react(), tailwind()],  
});