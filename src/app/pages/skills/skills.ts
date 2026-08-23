import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkillCard } from '../../shared/skill-card/skill-card';
import { SKILL_CATEGORIES } from '../../core/data/skills.data';

@Component({
  selector: 'app-skills',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SkillCard],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  protected readonly categories = SKILL_CATEGORIES;
}
