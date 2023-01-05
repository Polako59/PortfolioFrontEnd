import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SSkillsService } from 'src/app/services/s-skills.service';

@Component({
  selector: 'app-new-skills',
  templateUrl: './new-skills.component.html',
  styleUrls: ['./new-skills.component.css']
})


export class NewSkillsComponent implements OnInit {
  name: string = '';
  level: number = 0;
  logo: string = '';


  constructor(private sSkills: SSkillsService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const skill = new Skills(this.name, this.level, this.logo);
    this.sSkills.save(skill).subscribe(
      data => {
        alert("Skill añadido");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
