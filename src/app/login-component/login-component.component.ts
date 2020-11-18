import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
})
export class LoginComponentComponent implements OnInit {
  loggedIn = (localStorage.getItem('user') != null);

  login = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private loginService: LoginServiceService) {}

  ngOnInit(): void {
    localStorage.setItem('user',null);
  }

  loginUser() {
    this.loginService.login(this.login.value);
  }
}
