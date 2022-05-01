import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Skill } from './skill-model';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  constructor(private httpClient: HttpClient) {}

  getSkills(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>('/assets/skills.json');
  }
}
