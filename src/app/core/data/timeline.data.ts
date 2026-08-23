import type { TimelineEntry } from '../models/timeline.model';

export const TIMELINE: TimelineEntry[] = [
  {
    year: 'bis 2024',
    title: 'Sekundarschule',
    place: 'Kanton St. Gallen',
    description:
      'Abschluss der obligatorischen Schulzeit. In dieser Zeit ist auch das Interesse ' +
      'an Programmierung und Webentwicklung entstanden.',
  },
  {
    year: '2024',
    title: 'Eintritt IMS',
    place: 'Kantonsschule am Brühl, St. Gallen',
    description:
      'Start der Informatikmittelschule – duale Ausbildung zum Applikationsentwickler EFZ ' +
      'kombiniert mit der Berufsmaturität Wirtschaft.',
  },
  {
    year: 'seit 2026',
    title: '5. Semester',
    place: 'Informatikmittelschule',
    description:
      'Vertiefung in Applikationsentwicklung und Wirtschaft. Parallel dazu eigene ' +
      'Projekte, aktuell das Buchungssystem Rajana.',
    current: true,
  },
  {
    year: 'ab August 2027',
    title: 'Jahrespraktikum',
    place: 'Ausbildungsbetrieb – noch offen',
    description:
      'Einjähriges Praktikum in der Applikationsentwicklung als Abschluss der ' +
      'Ausbildung. Ich suche einen Betrieb, in dem ich an echten Produkten mitarbeite.',
    upcoming: true,
  },
  {
    year: 'danach',
    title: 'Bachelor in Informatik',
    place: 'Langfristiges Ziel',
    description:
      'Nach Abschluss der Ausbildung und erster Berufserfahrung ein Informatikstudium ' +
      'um die praktische Arbeit theoretisch zu vertiefen und weiter in Software ' +
      'Engineering hineinzuwachsen.',
    upcoming: true,
  },
];
