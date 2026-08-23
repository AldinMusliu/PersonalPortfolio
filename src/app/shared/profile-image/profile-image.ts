import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';

/**
 * Quadratisches Profilbild (1:1). Solange src/assets/profile.jpg fehlt oder
 * nicht geladen werden kann, erscheint automatisch ein grauer Platzhalter
 * im gleichen Seitenverhältnis – das Layout springt dadurch nicht.
 */
@Component({
  selector: 'app-profile-image',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './profile-image.html',
  styleUrl: './profile-image.css',
})
export class ProfileImage {
  readonly src = input('assets/profile.jpg');
  readonly alt = input('Profilbild');

  /** Wird true, sobald das Laden fehlschlägt (Datei noch nicht vorhanden). */
  protected readonly failed = signal(false);

  protected onError(): void {
    this.failed.set(true);
  }
}
