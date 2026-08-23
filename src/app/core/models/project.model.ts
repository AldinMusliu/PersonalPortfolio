/** Ehrlicher Status eines Projekts – wird als Badge auf der Karte angezeigt. */
export type ProjectStatus = 'in-entwicklung' | 'konzeptphase';

export interface Project {
  /** Wird in der URL und als Anker verwendet. */
  slug: string;
  title: string;
  /** Einzeiler für die Vorschau auf der Startseite. */
  tagline: string;
  /** Ausführliche Beschreibung für die Projects-Seite. */
  description: string;
  role: string;
  status: ProjectStatus;
  /** Freitext, z. B. "Launch-Ziel: Ende August 2026". */
  timeframe: string;
  /** Verwendete bzw. geplante Technologien. */
  stack: string[];
  /** Pfad zum Screenshot; null => Platzhalter wird angezeigt. */
  image: string | null;
  links: { label: string; url: string }[];
}
