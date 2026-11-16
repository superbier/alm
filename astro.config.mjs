import { defineConfig } from 'astro/config';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Fußnoten-Beschriftungen des Markdown-Prozessors ins Deutsche übersetzen.
const deutscheFussnoten = {
  name: 'deutsche-fussnoten',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      const walk = async (d) => (await readdir(d, { withFileTypes: true })).flatMap((e) =>
        e.isDirectory() ? [] : [join(d, e.name)]
      ).concat(...(await Promise.all((await readdir(d, { withFileTypes: true }))
        .filter((e) => e.isDirectory()).map((e) => walk(join(d, e.name))))));
      for (const f of (await walk(fileURLToPath(dir))).filter((f) => f.endsWith('.html'))) {
        const s = await readFile(f, 'utf8');
        if (!s.includes('data-footnotes')) continue;
        await writeFile(f, s
          .replace('<h2 class="sr-only" id="footnote-label">Footnotes</h2>', '<h2 id="footnote-label">Anmerkungen</h2>')
          .replace(/aria-label="Back to reference (\d+(?:-\d+)?)"/g, 'aria-label="Zurück zur Anmerkung $1 im Text"'));
      }
    },
  },
};

export default defineConfig({
  site: 'https://alm.net',
  trailingSlash: 'ignore',
  integrations: [deutscheFussnoten],
});
