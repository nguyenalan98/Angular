import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  constructor(private http: HttpClient, private router: Router) {}

  login(formValues) {
    return this.http
      .get(
        `http://localhost:3000/users?email=${formValues.email}&password=${formValues.password}`
      )
      .subscribe((response: any) => {
        const users = response;
        if (users && users.length > 0) {
            localStorage.setItem('user', JSON.stringify(users[0]));
            localStorage.setItem('auth',users[0].auth);
            this.router.navigate(["/home"]);
        }
      });
  }

  logout(){
    localStorage.setItem('user',null);
    localStorage.setItem('auth',null);
  }
}
