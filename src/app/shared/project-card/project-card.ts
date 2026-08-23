import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import type { Project, ProjectStatus } from '../../core/models/project.model';

/** Beschriftung der Status-Badge – bewusst ehrlich, kein "live". */
const STATUS_LABEL: Record<ProjectStatus, string> = {
  'in-entwicklung': 'In Entwicklung',
  konzeptphase: 'Konzeptphase',
};

@Component({
  selector: 'app-project-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  readonly project = input.required<Project>();
  /** 'preview' = kurze Fassung für die Startseite, 'full' = Detailfassung. */
  readonly variant = input<'preview' | 'full'>('preview');
  /** Laufende Nummer für die Anzeige "01", "02", … */
  readonly index = input(0);
  /** Spiegelt Bild und Text in der Detailfassung (für abwechselndes Layout). */
  readonly reversed = input(false);

  protected readonly statusLabel = computed(() => STATUS_LABEL[this.project().status]);
  protected readonly number = computed(() => String(this.index() + 1).padStart(2, '0'));

  /** true, sobald der Screenshot nicht geladen werden kann. */
  protected readonly imageFailed = signal(false);

  protected onImageError(): void {
    this.imageFailed.set(true);
  }
}
