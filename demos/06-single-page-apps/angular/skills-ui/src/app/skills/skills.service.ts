import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Skill } from './skill.model';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  client = inject(HttpClient);

  getSkills() {
    return this.client.get<Skill[]>(`${environment.apiUrl}skills`);
  }
}
