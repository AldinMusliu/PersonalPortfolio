import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Icon } from '../icon/icon';
import { SKILL_LEVEL_META, type SkillCategory, type SkillLevel } from '../../core/models/skill.model';

/** Dunkle Karte für eine Skill-Kategorie (Frontend, Backend, …). */
@Component({
  selector: 'app-skill-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  templateUrl: './skill-card.html',
  styleUrl: './skill-card.css',
})
export class SkillCard {
  readonly category = input.required<SkillCategory>();

  /**
   * Skills absteigend nach Können: Sicher → Fortgeschritten → Grundlagen → Lernphase.
   * Bei gleichem Level bleibt die Reihenfolge aus skills.data.ts erhalten
   * (Array.sort ist stabil). Dadurch muss die Datendatei nie umsortiert werden.
   */
  protected readonly sortedSkills = computed(() =>
    [...this.category().skills].sort(
      (a, b) => SKILL_LEVEL_META[b.level].progress - SKILL_LEVEL_META[a.level].progress,
    ),
  );

  protected levelLabel(level: SkillLevel): string {
    return SKILL_LEVEL_META[level].label;
  }

  /** true = Lernphase: Badge statt Stufe, leerer statt gefüllter Balken. */
  protected isLearning(level: SkillLevel): boolean {
    return SKILL_LEVEL_META[level].learning === true;
  }

  /** Balkenbreite in Prozent. */
  protected levelWidth(level: SkillLevel): string {
    return `${SKILL_LEVEL_META[level].progress * 100}%`;
  }
}
