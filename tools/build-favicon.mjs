/**
 * Erzeugt public/favicon.ico aus public/favicon.svg.
 *
 * Zwei Quellen, ein Ergebnis:
 *   - Ab 32px wird favicon.svg in echtem Chrome gerendert und skaliert.
 *   - Fuer 16px wird ein eigenes, pixelgenau gezeichnetes Motiv verwendet
 *     (PIXEL_16 unten). Skaliert man das grosse Motiv auf 16px herunter,
 *     verschmelzen der Querbalken des "A" und die Spitze des "M" zu einem
 *     Fleck. Auf Pixel gerastert bleibt "AM" dagegen lesbar.
 *
 * Neu erzeugen:  npm run favicon
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import puppeteer from 'puppeteer-core';

/** Chrome oder Edge zum Rendern. Ueberschreibbar per Umgebungsvariable. */
const CHROME =
  process.env.CHROME_PATH ??
  [
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  ].find(existsSync);

if (!CHROME) {
  console.error('Kein Chrome oder Edge gefunden. Pfad per CHROME_PATH setzen.');
  process.exit(1);
}
const BG = '#000000';
const ACCENT = '#4a3aff';

/** 16x16-Raster. '#' = ein gesetzter Pixel in Akzentfarbe. */
const PIXEL_16 = [
  '................',
  '................',
  '................',
  '................',
  '................',
  '..###....#...#..',
  '.#...#...##.##..',
  '.#...#...#.#.#..',
  '.#####...#...#..',
  '.#...#...#...#..',
  '.#...#...#...#..',
  '................',
  '................',
  '................',
  '................',
  '................',
];

/** Baut aus dem Raster ein SVG mit exakt einem Rechteck je gesetztem Pixel. */
function pixelSvg(grid) {
  const rects = [];
  grid.forEach((row, y) => {
    [...row].forEach((cell, x) => {
      if (cell === '#') rects.push(`<rect x="${x}" y="${y}" width="1" height="1" fill="${ACCENT}"/>`);
    });
  });
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" shape-rendering="crispEdges"><rect width="16" height="16" rx="3" fill="${BG}"/>${rects.join('')}</svg>`;
}

const mainSvg = readFileSync('public/favicon.svg', 'utf8');
const sources = new Map([
  [16, pixelSvg(PIXEL_16)],
  [32, mainSvg],
  [48, mainSvg],
  [64, mainSvg],
  [128, mainSvg],
  [256, mainSvg],
]);

const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox'] });
const page = await browser.newPage();

const images = [];
for (const [size, svg] of sources) {
  await page.setViewport({ width: size, height: size, deviceScaleFactor: 1 });
  await page.setContent(
    `<style>html,body{margin:0;padding:0}svg{display:block;width:${size}px;height:${size}px}</style>${svg}`,
  );
  const png = Buffer.from(await page.screenshot({ omitBackground: true, type: 'png' }));
  images.push([size, png]);
  console.log(`  ${String(size).padStart(3)}x${size}: ${String(png.length).padStart(5)} Bytes${size === 16 ? '  (pixelgenaue Variante)' : ''}`);
}
await browser.close();

// --- ICO-Container ----------------------------------------------------------
// Aufbau: 6-Byte-Kopf, dann je 16 Byte Verzeichniseintrag, dann die PNG-Daten.
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // reserviert, immer 0
header.writeUInt16LE(1, 2); // Typ 1 = Icon
header.writeUInt16LE(images.length, 4);

const dir = Buffer.alloc(16 * images.length);
let offset = header.length + dir.length;

images.forEach(([size, png], i) => {
  const p = i * 16;
  dir.writeUInt8(size >= 256 ? 0 : size, p); // 0 steht fuer 256
  dir.writeUInt8(size >= 256 ? 0 : size, p + 1);
  dir.writeUInt8(0, p + 2); // keine Farbpalette
  dir.writeUInt8(0, p + 3); // reserviert
  dir.writeUInt16LE(1, p + 4); // Farbebenen
  dir.writeUInt16LE(32, p + 6); // Bit pro Pixel
  dir.writeUInt32LE(png.length, p + 8);
  dir.writeUInt32LE(offset, p + 12);
  offset += png.length;
});

writeFileSync('public/favicon.ico', Buffer.concat([header, dir, ...images.map(([, p]) => p)]));
console.log(`favicon.ico erzeugt: ${images.length} Groessen, ${offset} Bytes`);
