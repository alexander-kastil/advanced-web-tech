import { Skill } from "./model";
import { SkillsService } from "./skills.service";

document.addEventListener("DOMContentLoaded", () => {
  let service = new SkillsService();

  //table
  service.getSkills().subscribe((data: Skill[]) => {
    let tblHtml = "";
    data.forEach(skill => {
      tblHtml += `<tr><td>${skill.name}</td></tr>`;
    });

    document.querySelector("#tblSkills").innerHTML = `
    <table class="table">
        <thead class="thead-dark">
            <tr>
                <th>Skill</th>
            </tr>
        </thead>        
        <tbody>${tblHtml}</tbody>
    </table>`;
  });

  //sum
  service.getSkills().subscribe((data: Skill[]) => {
    document.getElementById("sSum").innerText =
      "Summe Ids: " + data.length.toString();
  });

  document
    .querySelector("#btnAddSkill")
    .addEventListener("click", (e: Event) => {
      service.addSkill({
        id: parseInt(
          (<HTMLInputElement>document.querySelector("#txtID")).value
        ),
        name: (<HTMLInputElement>document.querySelector("#txtSkill")).value
      });
    });
});
