import { defineConfig } from 'astro/config';

// Output plain static HTML into docs/ so GitHub Pages can serve it
// via "Deploy from a branch" -> main /docs.
export default defineConfig({
  outDir: './docs',
  build: {
    // Inline all CSS so the page has no absolute /_astro/ asset links
    // and works under any GitHub Pages path (user.github.io/<repo>/).
    inlineStylesheets: 'always',
  },
});
