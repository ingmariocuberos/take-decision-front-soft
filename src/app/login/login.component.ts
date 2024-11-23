import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from './login.service';
import Swal from 'sweetalert2';
import { UserStoreService } from '../store/user/user-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isLoginPage: boolean = true;

  loginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private userStore: UserStoreService,
    private router: Router
  ){
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  onTabClick(loginPageStatus: boolean){
    this.isLoginPage = loginPageStatus;
  }

  onSubmit(loginData: {username: string, password: string}) {
    if(this.isLoginPage){
      this.loginService.login(loginData).subscribe( data => {
        const {msg, success} = data;
  
        if(success){
          this.userStore.setUser(loginData);

          this.router.navigate(['decision'])

        } else {
          Swal.fire(
            'Error',
            msg,
            'warning'
          )
        }
      })
    } else {
      this.loginService.register(loginData).subscribe( data => {
        const {msg, success} = data;
  
        if(success){
          Swal.fire(
            'Registro exitoso',
            msg,
            'success'
          );

          this.isLoginPage = true;

        } else {
          Swal.fire(
            'Error',
            msg,
            'warning'
          )
        }
      })
    }
    
  }
}
