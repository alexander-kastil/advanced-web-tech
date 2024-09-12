import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Skill } from '../skill.model';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.scss'],
  standalone: true,
})
export class SkillsListComponent {
  @Input() skills: Skill[];
  @Output() onSkillSelected: EventEmitter<Skill> = new EventEmitter();

  selectSkill(item: Skill) {
    this.onSkillSelected.emit(item);
  }
}
