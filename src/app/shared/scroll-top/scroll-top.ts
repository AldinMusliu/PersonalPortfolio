import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';

/**
 * Button unten rechts, der zum Seitenanfang zurückspringt.
 * Erscheint erst, wenn weit genug gescrollt wurde – sonst würde er
 * am Seitenanfang ohne Funktion herumstehen.
 */
@Component({
  selector: 'app-scroll-top',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './scroll-top.html',
  styleUrl: './scroll-top.css',
})
export class ScrollTop {
  /** Scroll-Tiefe in Pixeln, ab der der Button eingeblendet wird. */
  private static readonly THRESHOLD = 500;

  protected readonly visible = signal(false);

  @HostListener('window:scroll')
  protected onScroll(): void {
    // Signal statt Klassenfeld: Angular rendert nur neu, wenn sich der
    // Wert tatsächlich ändert – nicht bei jedem Scroll-Ereignis.
    this.visible.set(window.scrollY > ScrollTop.THRESHOLD);
  }

  protected scrollToTop(): void {
    // Wer im Betriebssystem reduzierte Bewegung eingestellt hat, springt
    // direkt nach oben statt langer Scroll-Animation.
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
  }
}
