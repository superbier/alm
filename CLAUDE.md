# alm.net

Persönliche Website von Niko Alm. Statische Astro-Seite, gehostet auf Cloudflare
(als Cloudflare Worker mit statischen Assets; Testumgebung: https://alm.superbier.workers.dev –
jeder Push auf `main` geht automatisch online).

Niko pflegt die Seite per Chat-Anweisung. Änderungen klein halten, nichts erfinden.

## Wo was liegt
- `src/data/site.json` – alle Inhalte der Startseite: Navigation, Hero-Links, Bio-Zeitleiste,
  Bücher, Presse-Einträge, Social-Links, E-Mail. Inhaltliche Änderungen fast immer nur hier.
- `src/styles/global.css` – Design. Farben und Schrift als Variablen oben in `:root`.
- `src/layouts/Base.astro` – Kopf, Navigation, Fußzeile.
- `src/pages/` – eine Datei pro Seite (`index.astro`, `ueber.astro`, `presse.astro`, `impressum.astro`).
- Texte: eine Markdown-Datei pro Text in `src/content/texte/` (Frontmatter: title, subtitle, date, dateLabel, kind, where, note; Fußnoten als `[^1]`). Erscheinen automatisch unter /texte/<dateiname> und im Bereich „Texte“ der Startseite.
- Unterseiten haben eigene Inhaltsdateien: `src/data/ueber.json`, `src/data/presse.json` (Presse-Liste speist auch die Startseite), `src/data/newsletter.json`.

## Design (Richtung „E · Glut“)
- Schwarz, Akzente Rot → Orange → Bernstein → Gelb (`--red`, `--orange`, `--amber`, `--yellow`).
- Schriften (selbst gehostet über @fontsource-variable, kein Google):
  Überschriften Archivo Expanded Black (`--font-head`, `--stretch-head: 125%`, `--heavy: 900`), in Versalien (`--case-head`);
  Fließtext Inter Tight (`--font`).
- Startseite = eine Liste ausklappbarer Bereiche (`<details name="bereich">`, immer nur einer offen):
  Name „Niko Alm“ → Über Alm; groß und farbig: Newsletter, Publikationen, Average, Schmaltz;
  kleiner in Dunkelgrau: Presse, Texte, Kontakt. Titel ohne Punkt. Link `/#presse` usw. öffnet den Bereich.
- Überschriftengrößen als Variablen `--size-name`, `--size-big`, `--size-small`.
- Listen als Haarlinien-Zeilen: links Datum, rechts Inhalt.

## Ablauf
`npm install && npm run build` muss fehlerfrei laufen, bevor gepusht wird.
