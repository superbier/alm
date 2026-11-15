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
- `src/pages/` – eine Datei pro Seite (`index.astro`, `impressum.astro`).

## Design (Richtung „E · Glut“)
- Schwarz, Akzente Rot → Orange → Bernstein → Gelb (`--red`, `--orange`, `--amber`, `--yellow`).
- Schrift: Inter Tight (selbst gehostet über @fontsource-variable), Überschriften im Schnitt 900 (`--heavy`), eng gesetzt (`--tight`).
- Große Bereichstitel ohne Punkt; kleine Navigation mit Punkt („Home.“).
- Listen als Haarlinien-Zeilen: links Datum, rechts Inhalt.

## Ablauf
`npm install && npm run build` muss fehlerfrei laufen, bevor gepusht wird.
