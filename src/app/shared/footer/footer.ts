import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SITE } from '../../core/data/site.data';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  protected readonly site = SITE;
  protected readonly year = new Date().getFullYear();
}
