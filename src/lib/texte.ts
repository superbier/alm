// Alle Texte aus src/content/texte/*.md, neueste zuerst.
// Neuer Text = neue .md-Datei mit Frontmatter (title, subtitle, date, dateLabel, kind, where, note).
const files = import.meta.glob('../content/texte/*.md', { eager: true }) as Record<string, any>;

export const texte = Object.entries(files)
  .map(([path, mod]) => ({
    slug: path.split('/').pop()!.replace(/\.md$/, ''),
    ...mod.frontmatter,
    Content: mod.Content,
  }))
  .sort((a, b) => String(b.date).localeCompare(String(a.date)));

// Kleine Markdown-Links [Text](URL) im Frontmatter (z. B. „note“) in HTML umwandeln.
export const inlineLinks = (s = '') =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>');
