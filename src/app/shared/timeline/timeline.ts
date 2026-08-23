import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { TimelineEntry } from '../../core/models/timeline.model';

/**
 * Vertikale Timeline für den Werdegang.
 * Funktioniert auf hellem und dunklem Grund – die Farben kommen über
 * currentColor bzw. Tokens vom umgebenden Abschnitt.
 */
@Component({
  selector: 'app-timeline',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './timeline.html',
  styleUrl: './timeline.css',
})
export class Timeline {
  readonly entries = input.required<TimelineEntry[]>();
}
