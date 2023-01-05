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
import { GuardGuard } from './services/guard.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {path: 'nuevaexp', component: NewExperienciaComponent, canActivate: [GuardGuard]},
  {path: 'editexp/:id', component: EditExperienciaComponent, canActivate: [GuardGuard]},
  {path: 'nuevaform', component: NewFormacionComponent, canActivate: [GuardGuard]},
  {path: 'editform/:id', component: EditFormacionComponent, canActivate: [GuardGuard]},
  {path: 'newskill', component: NewSkillsComponent, canActivate: [GuardGuard]},
  {path: 'editskill/:id', component: EditSkillsComponent, canActivate: [GuardGuard]},
  {path: 'editPersona/:id', component: EditPersonalComponent, canActivate: [GuardGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
