import type { IconSlug } from '../data/icon-paths';

/**
 * Einstufung einer Technologie.
 *
 * 'lernphase' ist bewusst KEINE Stufe unterhalb von 'grundlagen', sondern eine
 * eigene Kategorie: gerade erst begonnen, noch keine praktische Erfahrung.
 * Sie wird deshalb auch anders dargestellt (Badge + leerer Balken statt Füllung).
 */
export type SkillLevel = 'lernphase' | 'grundlagen' | 'fortgeschritten' | 'sicher';

export interface Skill {
  name: string;
  icon: IconSlug;
  level: SkillLevel;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

interface SkillLevelMeta {
  label: string;
  /** Füllung des Balkens (0–1). Bei 'lernphase' bewusst 0. */
  progress: number;
  /** true = wird als Badge mit leerem Balken gerendert, nicht als Fortschritt. */
  learning?: boolean;
}

export const SKILL_LEVEL_META: Record<SkillLevel, SkillLevelMeta> = {
  lernphase: { label: 'Lernphase', progress: 0, learning: true },
  grundlagen: { label: 'Grundlagen', progress: 0.35 },
  fortgeschritten: { label: 'Fortgeschritten', progress: 0.65 },
  sicher: { label: 'Sicher', progress: 0.9 },
};
