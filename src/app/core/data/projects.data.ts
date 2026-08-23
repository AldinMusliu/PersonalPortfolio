import type { Project } from '../models/project.model';

/**
 * Nur echte Projekte. Bewusst keine Demo- oder Platzhalter-Projekte –
 * das Layout ist auf wenige, dafür ausführliche Einträge ausgelegt.
 */
export const PROJECTS: Project[] = [
  {
    slug: 'rajana-booking-system',
    title: 'Rajana Booking System',
    tagline: 'Online-Buchungssystem für ein Kosmetikstudio.',
    description:
      'Buchungssystem für ein Kosmetikstudio im Familienbetrieb. Kundinnen und Kunden ' +
      'wählen Behandlung und Termin online, das Studio verwaltet Verfügbarkeiten und ' +
      'Buchungen über einen eigenen Bereich. Die Terminlogik und die Zugriffsrechte auf ' +
      'Kundendaten sind der anspruchsvollste Teil: Buchungen dürfen sich nicht ' +
      'überschneiden, und jede Person darf ausschliesslich ihre eigenen Daten sehen.',
    role: 'Konzept, Umsetzung und Datenmodell – Einzelprojekt',
    status: 'in-entwicklung',
    timeframe: 'In aktiver Entwicklung · Launch-Ziel Ende August 2026',
    stack: ['React', 'Supabase', 'PostgreSQL', 'Vercel'],
    image: 'assets/rajana-preview.png',
    links: [],
  },
  {
    slug: 'kellner-bestellsystem',
    title: 'Kellner-Bestellsystem',
    tagline: 'Mobile Bestellaufnahme für die Gastronomie.',
    description:
      'Bestellsystem für Restaurants: Das Servicepersonal nimmt Bestellungen direkt am ' +
      'Tisch auf dem Smartphone auf, die Küche erhält sie ohne Zwischenschritt. Aktuell ' +
      'in der Konzept- und Planungsphase – im Vordergrund stehen der Datenfluss zwischen ' +
      'Tisch, Küche und Abrechnung sowie die Frage, wie das System bei instabilem WLAN ' +
      'weiterarbeitet.',
    role: 'Konzept und Planung',
    status: 'konzeptphase',
    timeframe: 'Frühe Konzept- und Planungsphase',
    stack: ['Flutter', 'Dart'],
    // Bewusst kein Bild: Das Projekt ist in der Konzeptphase, es gibt noch
    // keinen Screenshot. Die Karte zeigt dann den Platzhalter.
    image: null,
    links: [],
  },
];
