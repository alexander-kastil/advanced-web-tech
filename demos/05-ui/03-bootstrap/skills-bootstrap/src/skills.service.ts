import { httpClient } from "./http-client";
import { BehaviorSubject } from "rxjs";
import { Skill } from "./model";

export class SkillsService {
  client: httpClient;
  arrSkills: Skill[] = [];
  Skills: BehaviorSubject<Skill[] | []>;

  constructor() {
    this.client = new httpClient();
    this.Skills = new BehaviorSubject(this.arrSkills);

    this.client.getObservable<Skill[]>("http://localhost:3000/skills").subscribe(data => {
      this.arrSkills = data;
      this.Skills.next(this.arrSkills);
    });
  }

  addSkill(s: Skill) {
    this.arrSkills.push(s);
    this.Skills.next(this.arrSkills);
  }
}
