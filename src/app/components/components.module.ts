import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material-module';

// MODULES
import { ComponentsRoutingModule } from './components-routing.module';

// COMPONENTS
import { HomeUserComponent } from './home-user/home-user.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [HomeUserComponent, HomeAdminComponent, DashboardComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    MaterialModule
  ]
})
export class ComponentsModule { }
