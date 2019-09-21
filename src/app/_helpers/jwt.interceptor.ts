import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../_services/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        debugger;
        let currentUser = this.authenticationService.currentUserValue;
        let tmpUser = null;
        let urlPeticion = request.url.toString();
        const isLoggedIn = currentUser && currentUser.token;
        if(urlPeticion.includes("login") && !isLoggedIn){
            tmpUser = this.authenticationService.datosLoginEnc.toString();
            request = request.clone({
                setHeaders: { 
                    ContentType: "application/x-www-form-urlencoded",
                    Authorization: "Basic " + btoa(tmpUser)
                }
            });
        } else if(isLoggedIn){
            request = request.clone({
                setHeaders: { 
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }
        return next.handle(request);
    }
}