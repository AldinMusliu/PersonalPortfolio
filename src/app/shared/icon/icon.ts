import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { ICON_PATHS, type IconSlug } from '../../core/data/icon-paths';

/**
 * Rendert ein Technologie-Logo aus dem generierten Simple-Icons-Set.
 * Verwendung: <app-icon slug="angular" [size]="28" />
 */
@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg
      role="img"
      [attr.aria-label]="icon().title"
      [attr.width]="size()"
      [attr.height]="size()"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path [attr.d]="icon().path" />
    </svg>
  `,
  styles: `
    :host {
      display: inline-flex;
    }
  `,
})
export class Icon {
  readonly slug = input.required<IconSlug>();
  readonly size = input(24);

  protected readonly icon = computed(() => ICON_PATHS[this.slug()]);
}
