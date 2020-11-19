import { Component, OnInit } from '@angular/core';
import { ConsoleReporter } from 'jasmine';
import {AccessDataService} from '../services/access-data.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {

  events = new Array();
  tickets = new Array();
  orders = new Array();
  users = new Array();
  auth = null;
  constructor(private accessData:AccessDataService) { }

  ngOnInit(): void {
    let check = JSON.parse(localStorage.getItem('user'));

    this.accessData.getData2().subscribe((response) => {
      this.orders = response;
    });
    this.accessData.getData().subscribe((response) => {
      this.events= response;
    });
    this.accessData.getUsers().subscribe((response)=>{
      this.users = response;
    })
    
    this.accessData.getPersonalOrders(check.id).subscribe((response)=>{
      this.tickets= response;
    });

    this.auth=(check.auth == "admin");

    if(this.auth){
      this.accessData.getData3().subscribe((response) => {
        this.tickets= response;
      });
    }
  }

}
