/**
 * Generiert src/app/core/data/icon-paths.ts aus dem npm-Paket "simple-icons".
 * So landen nur die tatsächlich verwendeten SVG-Pfade im Bundle.
 *
 * Neue Technologie hinzufügen:  Slug unten in ICONS ergänzen, dann
 *   npm run icons
 */
import { writeFileSync } from 'node:fs';
import * as si from 'simple-icons';

const ICONS = [
  // Frontend
  'angular', 'react', 'typescript', 'javascript', 'html5', 'css', 'flutter', 'dart',
  // Backend / Runtime
  // Java liegt bei simple-icons aus Markenrechtsgruenden als "openjdk" vor.
  'nodedotjs', 'dotnet', 'python', 'openjdk',
  // Datenbanken
  'supabase', 'postgresql', 'mysql', 'firebase',
  // Tools / Deployment
  'git', 'github', 'vercel', 'docker', 'figma', 'postman',
];

const toKey = (slug) => 'si' + slug.charAt(0).toUpperCase() + slug.slice(1);

const entries = ICONS.map((slug) => {
  const icon = si[toKey(slug)];
  if (!icon) throw new Error(`Unbekannter simple-icons Slug: ${slug}`);
  return `  '${slug}': {\n    title: ${JSON.stringify(icon.title)},\n    hex: '#${icon.hex}',\n    path: '${icon.path}',\n  },`;
}).join('\n');

const out = `// AUTOMATISCH GENERIERT von tools/generate-icons.mjs – nicht von Hand bearbeiten.
// Neu erzeugen mit: npm run icons
// Quelle: simple-icons (CC0 1.0). Markenlogos gehören den jeweiligen Rechteinhabern.

export interface IconDefinition {
  /** Offizieller Name der Technologie (dient auch als aria-label). */
  title: string;
  /** Offizielle Markenfarbe, z. B. fuer Hover-Effekte. */
  hex: string;
  /** SVG-Pfad, gezeichnet in einer 24x24-Viewbox. */
  path: string;
}

export type IconSlug = ${ICONS.map((s) => `'${s}'`).join(' | ')};

export const ICON_PATHS: Record<IconSlug, IconDefinition> = {
${entries}
};
`;

writeFileSync('src/app/core/data/icon-paths.ts', out);
console.log(`icon-paths.ts erzeugt (${ICONS.length} Icons)`);
