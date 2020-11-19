import { Injectable } from '@angular/core';
import eventModel from '../../app/models/eventModel';
import orderModel from '../../app/models/orderModel';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router"
import { FormControl, FormGroup, ReactiveFormsModule,NgModel } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegisterServiceService {
  baseUrl:string;
  baseUrl2:string;

  constructor(private http : HttpClient, private router : Router) {
    this.baseUrl = 'http://localhost:3000/events';
    this.baseUrl2 = 'http://localhost:3000/orders';
  }

  addEvent(event: eventModel) {
    return this.http.post(this.baseUrl, event);
  }

  addTicket(ticket:orderModel){
    return this.http.post(this.baseUrl2,ticket);
  }
}
