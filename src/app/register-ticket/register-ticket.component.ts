import { Component, OnInit } from '@angular/core';
import orderModel from 'src/app/models/orderModel';
import { RegisterServiceService } from '../services/register-service.service';
import { Router } from '@angular/router';
import { AccessDataService } from '../services/access-data.service';


@Component({
  selector: 'app-register-ticket',
  templateUrl: './register-ticket.component.html',
  styleUrls: ['./register-ticket.component.css'],
})
export class RegisterTicketComponent implements OnInit {
  model: orderModel = {userID:0,eventID:0,ticketID:0,ticketAmt:0};
  events = new Array();
  tickets = new Array();

  constructor(
    private registerService: RegisterServiceService,
    private router: Router,
    private accessData:AccessDataService
  ) {}

  ngOnInit(): void {
    this.accessData.getData2().subscribe((response) => {
      this.tickets= response;
    });
    this.accessData.getData().subscribe((response) => {
      this.events= response;
    });
  }

  registerTicket(form) {
    let id = JSON.parse(localStorage.getItem('user')).id;
    this.model = {userID:id,eventID:form.value.eventID,ticketID:form.value.eventID,ticketAmt:form.value.ticketAmt}
    this.registerService.addTicket(this.model).subscribe(() => {
      alert('ticket added');
      this.model = {
        userID:0,
        eventID:0,
        ticketID:0,
        ticketAmt:0
      };
      this.router.navigate(['admin2']);
    });
  }
}
