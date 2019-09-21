import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  usuario: string;
  password: string;
  hide: boolean;
  submitted = false;
  returnUrl: string = "";
  constructor(private formbuilder: FormBuilder,
              private route: ActivatedRoute, 
              private router: Router, 
              private authService: AuthenticationService) {
    if (this.authService.currentUserValue) { 
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.hide = true;
    this.loginForm = this.formbuilder.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get valuesF(){
    return this.loginForm.controls;
  }
  
  clickMostrarContrasenia(e){
    e.preventDefault();
    this.hide=!this.hide;
  }

  onSubmit(event){
    this.submitted = true;
    
    if(this.loginForm.invalid)
      return;

    this.authService.login(this.valuesF.usuario.value, this.valuesF.password.value)
    .pipe(first()).
    subscribe( 
      data => {
        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.submitted = false;
        
        alert('Nombre de usuario y/o contraseña incorrectos');
      }
    );
  }

}
