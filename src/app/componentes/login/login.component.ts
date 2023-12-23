import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    imports: [CommonModule, FormsModule]
})
export class LoginComponent {

  username='ariana';
  isLoggedIn= false; // está funcionando como un state

  greet(){
    alert('Hola!!');
  }

  loginObj: any = {
    "email": "",
    "password": ""
  };

  constructor(private http: HttpClient, private router: Router) {

  }

  onLogin() {
    this.http.post('http://challenge-react.alkemy.org/', this.loginObj).subscribe((res: any) => {
      if (res.token) {
        alert('login success');
        localStorage.setItem('loginToken', res.token);
        this.router.navigateByUrl('/home');
        this.isLoggedIn= true;
      } else {
        alert(res.message);
        console.log(this.loginObj)
      }
    });

  }
}
