import { defineConfig } from 'astro/config';

// https://astro.build/config
import sanity from "astro-sanity";

// https://astro.build/config
export default defineConfig({
  integrations: [sanity({
    projectId: 'w0vn761s',
    dataset: 'production',
    apiVersion: '2021-03-25',
    useCdn: true,
  })]
});