import { defineConfig } from 'astro/config';
import { astroImageTools } from "astro-imagetools";
import react from '@astrojs/react';

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [astroImageTools, react()],
  experimental: {
    assets: true
  },
  output: "server",
  adapter: netlify()
});