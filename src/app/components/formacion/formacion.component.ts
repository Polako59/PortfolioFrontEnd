import { Component, OnInit } from '@angular/core';
import { Formacion } from 'src/app/model/formacion';
import { SFormacionService } from 'src/app/services/s-formacion.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit {
  formacionList: Formacion[] = [];

  constructor(private sFormacion: SFormacionService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarFormacion();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarFormacion(): void {
    this.sFormacion.lista().subscribe(data => { this.formacionList = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.sFormacion.delete(id).subscribe(
        data => {
          this.cargarFormacion();
        }, err => {
          alert("No se pudo borrar la formacion");
        }
      )
    }
  }
}