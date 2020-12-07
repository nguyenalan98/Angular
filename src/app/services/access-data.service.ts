import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Component, OnInit } from '@angular/core';
import 'rxjs';
import {HttpClientModule} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AccessDataService {
  baseUrl:string;

  constructor(private http: HttpClient) { 
    this.baseUrl = 'http://localhost:3000';
  }

  getData() : Observable<any>{
    return this.http.get(this.baseUrl + '/events');
  }

  getData2() : Observable<any>{
    return this.http.get(this.baseUrl + '/tickets');
  }

  getData3() : Observable<any>{
    return this.http.get(this.baseUrl + '/orders');
  }

  getUsers() : Observable<any>{
    return this.http.get(this.baseUrl + '/users');
  }

  getPersonalOrders(num):Observable<any>{
    return this.http.get(`http://localhost:3000/orders?userID=${num}`);
  }

  getEvent(num):Observable<any>{
    return this.http.get(`http://localhost:3000/events?id=${num+1}`);
  }
}
