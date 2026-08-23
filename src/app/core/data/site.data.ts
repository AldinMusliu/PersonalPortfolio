/**
 * Zentrale Stammdaten – Name, Kurztexte, Kontakt.
 * Hier zuerst nachschauen, wenn du Texte ändern willst.
 */
export const SITE = {
  name: 'Aldin Musliu',
  /** Kurzform für Navigation und Footer. */
  role: 'Applikationsentwicklung',

  /** Hero-Headline. Wird umbruchgenau so ausgegeben, wie hier definiert. */
  heroLines: ['Ich entwickle', 'Software, die', 'im Alltag hält.'],

  heroIntro:
    'Ich bin Aldin Musliu, angehender Applikationsentwickler EFZ ' +
    'mit Berufsmaturität Wirtschaft. Aktuell im 5. Semester an der IMS der ' +
    'Kantonsschule am Brühl in St. Gallen – auf der Suche nach einem Jahrespraktikum ' +
    'ab August 2027.',

  aboutText:
    'Mein Fokus liegt auf Webanwendungen: sauber strukturierte Frontends, eine ' +
    'durchdachte Datenbasis und ein Deployment, das funktioniert. Was ich baue, ' +
    'entsteht meist aus einem konkreten Bedarf, ein Buchungssystem für den ' +
    'Familienbetrieb ist mir näher als eine Übungsaufgabe. Die kaufmännische Seite ' +
    'der Berufsmaturität hilft mir dabei, Software nicht nur technisch, sondern ' +
    'auch wirtschaftlich zu denken.',

  /** Pfad zum Profilbild. Fehlt die Datei, zeigt die App einen Platzhalter. */
  profileImage: 'assets/profile.jpg',

  contact: {
    email: 'aldin.musliu@ksb-sg.ch',
    location: 'St. Gallen, Schweiz',
    availability: 'Offen für ein Jahrespraktikum ab August 2027',
  },

  /** Footer-Links. Einträge ohne echte URL einfach entfernen. */
  socials: [
    { label: 'GitHub', url: 'https://github.com/AldinMusliu' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/musliu-aldin-457511397/' },
  ],
} as const;
