import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';

export const routes: Routes = [
    {path: 'home', component:HomeComponent},
    {path: 'login', component:LoginComponent},
    {path: 'perfil', component:PerfilComponent},
    {path: 'buscador', component:BuscadorComponent},
    {path: '', redirectTo:'login', pathMatch: 'full'}
];
