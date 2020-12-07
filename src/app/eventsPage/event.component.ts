import { Component, OnInit } from '@angular/core';
import {AccessDataService} from '../services/access-data.service';
import eventModel from 'src/app/models/eventModel';
import { RegisterServiceService } from '../services/register-service.service';
import ticketModel from '../models/ticketModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  events = new Array();
  model: eventModel = {id:'', name: '', date:'', time: '', duration:'',price:0,status:'in progress'};
  user:boolean;
  eventID = 0;

  constructor(private accessData:AccessDataService,private registerService:RegisterServiceService,private router:Router) { }

  ngOnInit(): void {
    this.user = (localStorage.getItem('auth') == 'admin');
    this.accessData.getData().subscribe((response) => {
    this.events= response;
    this.model.id = (response.length+1).toString();
  });
  }

  registerEvent(form) {
    let ticket:ticketModel={eventID:parseInt(form.value.id),price:form.value.price};
    this.registerService.addEventTicket(ticket).subscribe(() => {
      ticket = {
        eventID : 0,
        price: 0
      };
    });
  
      this.registerService.addEvent(form.value).subscribe(() => {
        alert('event added');
        this.model = {
          id:'',
          name: '',
          date: null,
          time: null,
          duration:null,
          price:0,
          status:''
        };

      });
    }

    approveID(number){
      this.accessData.getEvent(number).subscribe((item)=>{
        item[0].status = "approve";
        this.registerService.updateEvent(number,item[0]);
      });
    }

    declineID(number){
      this.accessData.getEvent(number).subscribe((item)=>{
        item[0].status = "decline";
        this.registerService.updateEvent(number,item[0]);
      });
    }
    
  }


