# Assets

Alles in diesem Ordner wird beim Build nach `assets/` kopiert und ist unter
`assets/<dateiname>` erreichbar.

## Vorhanden

| Datei                | Verwendung                              | Grösse           |
| -------------------- | --------------------------------------- | ---------------- |
| `profile.jpg`        | Hero-Porträt (Startseite)               | 900 × 1350 px    |
| `rajana-preview.png` | Screenshot Rajana Booking System        | 1432 × 1056 px   |

Das unbearbeitete Kamera-Original des Porträts liegt unter
`design/profile-original.jpg` (5760 × 8640 px). Dieser Ordner wird **nicht**
mitgebaut – er dient nur als Archiv.

## Neues Bild einbinden

1. Datei hier ablegen, am besten unter 300 KB.
2. Pfad eintragen:
   - Profilbild → `src/app/core/data/site.data.ts` (`profileImage`)
   - Projekt-Screenshot → `src/app/core/data/projects.data.ts` (`image`)

Fehlt eine Datei oder lässt sie sich nicht laden, zeigt die App automatisch
einen Platzhalter im richtigen Seitenverhältnis. Das Kellner-Bestellsystem
nutzt das bewusst, solange kein Screenshot existiert.
