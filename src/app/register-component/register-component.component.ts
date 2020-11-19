import { Component, OnInit } from '@angular/core';
import eventModel from 'src/app/models/eventModel';
import { RegisterServiceService } from '../services/register-service.service';
import { Router } from '@angular/router';
import { AccessDataService } from '../services/access-data.service';
import ticketModel from '../models/ticketModel';


@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css'],
})
export class RegisterComponentComponent implements OnInit {
  events = new Array();
  model: eventModel = {id:'', name: '', date:'', time: '', duration:'',price:0};

  constructor(
    private registerService: RegisterServiceService,
    private accessData:AccessDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.accessData.getData().subscribe((response) => {
      this.events = response;
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
        price:0
      };
      this.router.navigate(['home']);
    });
  }
}
