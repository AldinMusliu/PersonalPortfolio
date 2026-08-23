import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SITE } from '../../core/data/site.data';

/**
 * Schwebende Navigation. Bewusst als dunkle Pille umgesetzt, damit sie
 * sowohl über hellen (Home, Projects) als auch über dunklen Abschnitten
 * (Skills) lesbar bleibt.
 */
@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  protected readonly site = SITE;
  protected readonly menuOpen = signal(false);

  protected readonly links = [
    { path: '/', label: 'Start', exact: true },
    { path: '/skills', label: 'Skills', exact: false },
    { path: '/projekte', label: 'Projekte', exact: false },
  ];

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
