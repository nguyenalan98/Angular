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
    this.baseUrl = 'http://localhost:3000/events';
  }

  getData() : Observable<any>{
    return this.http.get(this.baseUrl);
  }
}