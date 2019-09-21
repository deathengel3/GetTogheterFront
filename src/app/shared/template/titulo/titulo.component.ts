import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.scss']
})
export class TituloComponent implements OnInit {
  
  @Input() public titulo: string = "Some title";

  constructor() { }

  ngOnInit() {
  }

}
