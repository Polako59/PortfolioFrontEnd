import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formacion } from 'src/app/model/formacion';
import { SFormacionService } from 'src/app/services/s-formacion.service';

@Component({
  selector: 'app-new-formacion',
  templateUrl: './new-formacion.component.html',
  styleUrls: ['./new-formacion.component.css']
})
export class NewFormacionComponent implements OnInit {
  titulo: string = '';
  fecha: string = '';
  institucion: string = '';
  descripcion: string = '';
  claseForm: string = '';

  constructor(private sFormacion: SFormacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Formacion(this.titulo, this.fecha, this.institucion, this.descripcion, this.claseForm);
    this.sFormacion.save(expe).subscribe(
      data => {
        alert("Formacion añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
