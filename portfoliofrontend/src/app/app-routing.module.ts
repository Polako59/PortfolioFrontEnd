import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditFormacionComponent } from './components/formacion/edit-formacion.component';
import { NewFormacionComponent } from './components/formacion/new-formacion.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditPersonalComponent } from './components/personal/edit-personal.component';
import { EditSkillsComponent } from './components/skills/edit-skills.component';
import { NewSkillsComponent } from './components/skills/new-skills.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'nuevaform', component: NewFormacionComponent},
  {path: 'editform/:id', component: EditFormacionComponent},
  {path: 'newskill', component: NewSkillsComponent},
  {path: 'editskill/:id', component: EditSkillsComponent},
  {path: 'editPersona/1', component: EditPersonalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
