import { NgModule } from '@angular/core';
import { Routes, CanActivate, RouterModule } from '@angular/router';

// COMPONENTS
import { HomeUserComponent } from './home-user/home-user.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
 

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/dashboard',
  //   pathMatch: 'full'
  // },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      title: 'Realizar voto'
    }
  },
  {
    path: 'home-admin',
    component: HomeAdminComponent,
    data: {
      title: 'Administración de votaciones'
    }
  },
  {
    path: 'home-user',
    component: HomeUserComponent,
    data: {
      title: 'Modificar la votación'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
