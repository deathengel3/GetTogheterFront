import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Usuario } from 'src/app/_models/usuario';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {

  public tituloPag: string;
  public showSpinner:boolean = false;
  currentUser: Usuario;

  constructor(private routeAct: ActivatedRoute, private router: Router, private authService: AuthenticationService) { 
    this.authService.currentUser.subscribe(x => this.currentUser = x);

    //Obtiene el nombre de la página y lo manda al componente de TituloComponent
    this.router.events.pipe(
      filter( e => e instanceof NavigationEnd),
      map( () => {
        this.showSpinner = true;
        let child = this.routeAct;
        while(child){
          if(child.firstChild){
            child = child.firstChild
          } else if(child.snapshot.data && child.snapshot.data['title']){
            return child.snapshot.data['title'];
          }
        }
      })
    ).subscribe( data => {
      this.tituloPag = data
      setTimeout( () => this.showSpinner = false, 500);
    });
  }

  ngOnInit() {
  }

}
