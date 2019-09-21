import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../_services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private authService: AuthenticationService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
    const currentUser = this.authService.currentUserValue;
    debugger;
    if(currentUser){
      if (next.data.roles.map( dato => dato === currentUser.rol)) {
        if(currentUser.rol == 1)
          this.router.navigate(['/home-admin']);
        else
          this.router.navigate(['/home-user']);
        
        return true;
      }
    }

    this.router.navigate(['/login']);
    return false;
  }
}
