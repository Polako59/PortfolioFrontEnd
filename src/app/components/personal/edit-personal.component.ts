import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-edit-personal',
  templateUrl: './edit-personal.component.html',
  styleUrls: ['./edit-personal.component.css']
})
export class EditPersonalComponent implements OnInit {
  persona: Persona = null;

  constructor(private activatedRouter: ActivatedRoute, private personaService: PersonaService,
    private router: Router){  }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    
    this.personaService.detail(id).subscribe(
      data =>{
        this.persona = data;
      }, err =>{
        alert("Error al modificar Persona");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.update(id, this.persona).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar Persona");
         this.router.navigate(['']);
      }
    )
  }

  uploadImage($event:any){

  }
}
