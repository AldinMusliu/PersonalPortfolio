import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProfileImage } from '../../shared/profile-image/profile-image';
import { ProjectCard } from '../../shared/project-card/project-card';
import { Timeline } from '../../shared/timeline/timeline';
import { SITE } from '../../core/data/site.data';
import { PROJECTS } from '../../core/data/projects.data';
import { TIMELINE } from '../../core/data/timeline.data';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, ProfileImage, ProjectCard, Timeline],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly site = SITE;
  protected readonly projects = PROJECTS;
  protected readonly timeline = TIMELINE;

  /** Kurzfakten für das Profil-Panel. */
  protected readonly facts = [
    { label: 'Ausbildung', value: 'Applikationsentwickler EFZ + BM Wirtschaft' },
    { label: 'Schule', value: 'IMS, Kantonsschule am Brühl, St. Gallen' },
    { label: 'Aktuell', value: '5. Semester' },
    { label: 'Gesucht', value: 'Jahrespraktikum ab August 2027' },
  ];
}
