import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
import { RouterModule } from '@angular/router'
import { MaterialModule } from '../../material-module';

// COMPONENTS
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { TituloComponent } from './titulo/titulo.component';
import { MenuListHeaderComponent } from './header/menu-list-header/menu-list-header.component';

import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';



@NgModule({
  declarations: [
    TituloComponent, 
    MenuListHeaderComponent, 
    HeaderComponent, 
    MenuComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    NgMaterialMultilevelMenuModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent, TituloComponent, MenuComponent
  ]
})
export class TemplateModule { }
