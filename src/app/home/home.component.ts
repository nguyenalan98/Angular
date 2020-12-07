import { Component, OnInit } from '@angular/core';
import orderModel from 'src/app/models/orderModel';
import { RegisterServiceService } from '../services/register-service.service';
import { Router } from '@angular/router';
import { AccessDataService } from '../services/access-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  model: orderModel = { userID: 0, eventID: 0, ticketID: 0, ticketAmt: 0 };
  events = new Array();
  tickets = new Array();
  eventID = 0;

  user:boolean;

  constructor(
    private registerService: RegisterServiceService,
    private router: Router,
    private accessData: AccessDataService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = (JSON.parse(localStorage.getItem('user')) != null);
    this.accessData.getData2().subscribe((response) => {
      this.tickets = response;
    });
    this.accessData.getData().subscribe((response) => {
      this.events = response;
    });
  }

  registerTicket(form) {
    let id = JSON.parse(localStorage.getItem('user')).id;
    this.model = { userID: id, eventID: this.eventID, ticketID: this.eventID, ticketAmt: form.value.ticketAmt }
    this.registerService.addTicket(this.model).subscribe(() => {
      alert('ticket added');
      this.model = {
        userID: 0,
        eventID: 0,
        ticketID: 0,
        ticketAmt: 0
      };
      this.router.navigate(['completed']);
    });
}

setID(number){
  this.eventID = number;
}

}

