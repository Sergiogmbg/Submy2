import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// componentes
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent} from './components/login/login.component';
import {RegistroComponent} from './components/registro/registro.component';
import { ListaSuscripcionesComponent } from './components/lista-suscripciones/lista-suscripciones.component';
import { GLoginUserGuard } from './services/g-login-user.guard'; // para cuando tengamos que poner parte privada

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: RegistroComponent 
  },
  {
    path: 'suscripciones',
    component: ListaSuscripcionesComponent 
  },
  {
    path: 'login',
    component: LoginComponent 
  },

]; // SEGUIR AQUÍ

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
