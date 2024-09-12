import { JsonPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Skill } from './skill.model';
import { SkillsListComponent } from './skills-list/skills-list.component';
import { SkillsService } from './skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  standalone: true,
  imports: [SkillsListComponent, JsonPipe]
})
export class SkillsComponent implements OnInit {
  service = inject(SkillsService);
  skills: Skill[] = [];
  selected: Skill;

  ngOnInit(): void {
    this.service.getSkills().subscribe((data) => (this.skills = data));
  }

  skillSelected(item: Skill) {
    this.selected = item;
  }
}
