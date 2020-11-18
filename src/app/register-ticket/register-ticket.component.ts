import { Component, OnInit } from '@angular/core';
import ticketModel from 'src/app/models/ticketModel';
import { RegisterServiceService } from '../services/register-service.service';
import { Router } from '@angular/router';
import { AccessDataService } from '../services/access-data.service';


@Component({
  selector: 'app-register-ticket',
  templateUrl: './register-ticket.component.html',
  styleUrls: ['./register-ticket.component.css'],
})
export class RegisterTicketComponent implements OnInit {
  model: ticketModel = { eventID:0, price: 0, amount:0 };
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
    console.log(form);
    this.registerService.addTicket(form.value).subscribe(() => {
      alert('ticket added');
      this.model = {
        eventID : 0,
        price: 0,
        amount: 0
      };
      this.router.navigate(['admin2']);
    });
  }
}
