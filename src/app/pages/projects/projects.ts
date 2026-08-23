import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProjectCard } from '../../shared/project-card/project-card';
import { PROJECTS } from '../../core/data/projects.data';
import { SITE } from '../../core/data/site.data';

@Component({
  selector: 'app-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  protected readonly projects = PROJECTS;
  protected readonly site = SITE;
}
