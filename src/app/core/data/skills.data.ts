import type { SkillCategory } from '../models/skill.model';

/**
 * Technologien mit Selbsteinschätzung.
 *
 * Stufen: 'sicher' | 'fortgeschritten' | 'grundlagen'
 * Sonderfall 'lernphase': gerade erst begonnen, noch keine Projekterfahrung
 * wird bewusst anders dargestellt als eine niedrige Stufe.
 *
 * Die Reihenfolge in den Arrays ist nur die Ausgangslage: Angezeigt wird
 * automatisch nach Level sortiert (Sicher zuerst, Lernphase zuletzt). Bei
 * gleichem Level gilt die Reihenfolge aus dieser Datei.
 *
 * Neue Technologie: Icon-Slug in tools/generate-icons.mjs ergänzen,
 * dann `npm run icons` ausführen.
 */
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    description: 'Oberflächen, die verständlich bleiben. Auch wenn die Logik dahinter wächst.',
    skills: [
      { name: 'Angular', icon: 'angular', level: 'fortgeschritten' },
      { name: 'React', icon: 'react', level: 'grundlagen' },
      { name: 'TypeScript', icon: 'typescript', level: 'fortgeschritten' },
      { name: 'HTML', icon: 'html5', level: 'sicher' },
      { name: 'CSS', icon: 'css', level: 'sicher' },
      { name: 'Flutter', icon: 'flutter', level: 'lernphase' },
    ],
  },
  {
    title: 'Backend',
    description: 'Serverlogik, Schnittstellen und der Teil, den man nicht sieht.',
    skills: [
      { name: 'Node.js', icon: 'nodedotjs', level: 'grundlagen' },
      { name: 'Dart', icon: 'dart', level: 'lernphase' },
      { name: 'Python', icon: 'python', level: 'grundlagen' },
      // Icon-Slug 'openjdk': simple-icons führt Java aus Markenrechtsgründen so.
      { name: 'Java', icon: 'openjdk', level: 'grundlagen' },
      // Icon-Slug 'dotnet': simple-icons führt C# aus Markenrechtsgründen nicht,
      // das .NET-Logo ist der naheliegendste Ersatz.
      { name: 'C#', icon: 'dotnet', level: 'grundlagen' },
    ],
  },
  {
    title: 'Datenbanken',
    description: 'Datenmodelle, Abfragen und Zugriffsrechte von Anfang an mitgedacht.',
    skills: [
      { name: 'Supabase', icon: 'supabase', level: 'fortgeschritten' },
      { name: 'PostgreSQL', icon: 'postgresql', level: 'fortgeschritten' },
      { name: 'MySQL', icon: 'mysql', level: 'fortgeschritten' },
    ],
  },
  {
    title: 'Tools & Deployment',
    description: 'Womit ich arbeite, versioniere und veröffentliche.',
    skills: [
      { name: 'Git', icon: 'git', level: 'fortgeschritten' },
      { name: 'GitHub', icon: 'github', level: 'fortgeschritten' },
      { name: 'Vercel', icon: 'vercel', level: 'grundlagen' },
      { name: 'Figma', icon: 'figma', level: 'fortgeschritten' },
    ],
  },
];
