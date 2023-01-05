import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PersonalComponent } from './components/personal/personal.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './services/interceptor-service';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { EditFormacionComponent } from './components/formacion/edit-formacion.component';
import { NewFormacionComponent } from './components/formacion/new-formacion.component';
import { FormacionComponent } from './components/formacion/formacion.component';
import { NewSkillsComponent } from './components/skills/new-skills.component';
import { EditSkillsComponent } from './components/skills/edit-skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { EditPersonalComponent } from './components/personal/edit-personal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonalComponent,
    ExperienciaComponent,
    FooterComponent,
    LoginComponent,
    SkillsComponent,
    ProyectosComponent,
    HomeComponent,
    FormacionComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    EditFormacionComponent,
    NewFormacionComponent,
    NewSkillsComponent,
    EditSkillsComponent,
    EditPersonalComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({})

  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
