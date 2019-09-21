import { Component, OnInit } from '@angular/core';

import { ROUTES } from '../../manu-routes.config';

@Component({
  selector: 'app-menu-list-header',
  templateUrl: './menu-list-header.component.html',
  styleUrls: ['./menu-list-header.component.scss']
})
export class MenuListHeaderComponent implements OnInit {
  private itemsMenu: any[];
  constructor() {
    this.itemsMenu = ROUTES;
  }

  ngOnInit() {
  }

}
