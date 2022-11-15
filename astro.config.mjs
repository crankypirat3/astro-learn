import { defineConfig } from 'astro/config';

// https://astro.build/config
import sanity from "astro-sanity";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), sanity({
    projectId: 'w0vn761s',
    dataset: 'production',
    apiVersion: '2021-03-25',
    useCdn: true
  }), react(), tailwind()]
});