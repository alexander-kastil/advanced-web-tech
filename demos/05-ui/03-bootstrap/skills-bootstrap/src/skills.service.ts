import { HttpClient } from "./http-client";
import { BehaviorSubject } from "rxjs";
import { Skill } from "./model";
import { environment } from "./env";

export class SkillsService {
  client: HttpClient;
  arrSkills: Skill[] = [];
  Skills: BehaviorSubject<Skill[] | []>;

  constructor() {
    this.client = new HttpClient();
    this.Skills = new BehaviorSubject(this.arrSkills);

    this.client.get<Skill[]>(environment.api).subscribe(data => {
      this.arrSkills = data;
      this.Skills.next(this.arrSkills);
    });
  }

  addSkill(s: Skill) {
    this.arrSkills.push(s);
    this.Skills.next(this.arrSkills);
  }
}
