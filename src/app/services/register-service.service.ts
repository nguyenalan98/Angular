import { Injectable } from '@angular/core';
import eventModel from '../../app/models/eventModel';
import orderModel from '../../app/models/orderModel';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router"
import { FormControl, FormGroup, ReactiveFormsModule,NgModel } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import ticketModel from '../../app/models/ticketModel';

@Injectable({
  providedIn: 'root',
})
export class RegisterServiceService {
  baseUrl:string;
  baseUrl2:string;
  baseUrl3:string;

  constructor(private http : HttpClient, private router : Router) {
    this.baseUrl = 'http://localhost:3000/events';
    this.baseUrl2 = 'http://localhost:3000/orders';
    this.baseUrl3 = 'http://localhost:3000/tickets';
  }

  addEvent(event: eventModel) {
    return this.http.post(this.baseUrl, event);
  }

  addTicket(ticket:orderModel){
    return this.http.post(this.baseUrl2,ticket);
  }

  addEventTicket(ticket:ticketModel){
    return this.http.post(this.baseUrl3,ticket);
  }

  updateEvent(event:eventModel){
    return this.http.put(this.baseUrl,event);
  }
}
