import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, NoPreloading } from '@angular/router';

import { AuthGuard } from './_guards/auth.guard';

// COMPONENTS
import { Rol } from '././_models/rol';
import { LoginComponent } from './components/login/login.component';
import { MasterComponent } from './layouts/master/master.component';
import { GeneralRoutes } from './shared/routes/general.routes';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: MasterComponent,
    children: GeneralRoutes,
    canActivate: [AuthGuard],
    data: {roles: [Rol.Administrador, Rol.Usuario]}
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { 
    preloadingStrategy: PreloadAllModules,
    useHash: true,
    scrollPositionRestoration: 'enabled' 
  }),
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
