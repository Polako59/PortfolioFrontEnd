import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SSkillsService } from 'src/app/services/s-skills.service';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css']
})
export class EditSkillsComponent implements OnInit {

  skillEdit: Skills = null;

  constructor(private sSkills: SSkillsService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sSkills.detail(id).subscribe(
      data =>{
        this.skillEdit = data;
      }, err =>{
        alert("Error al modificar Skill");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sSkills.update(id, this.skillEdit).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar Skill");
         this.router.navigate(['']);
      }
    )
  }

}