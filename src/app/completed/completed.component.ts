import { Component, OnInit } from '@angular/core';
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
  show:boolean;
  auth = null;
  constructor(private accessData:AccessDataService) { }

  ngOnInit(): void {
    this.accessData.getData2().subscribe((response) => {
      this.tickets= response;
      this.orders = response;
    });
    this.accessData.getData().subscribe((response) => {
      this.events= response;
    });

    let check = JSON.parse(localStorage.getItem('user'));
    this.auth=(check.auth == "admin");

    if(this.auth){
      this.show = true;
    }

    if(!this.auth){
      let filter = new Array();
      this.accessData.getData3().subscribe((response)=>{
        this.tickets = response;
        this.tickets.forEach((element)=>{
          if(element.userID == check.id){
            filter.push(element);
            this.show=true;
          }
        })
      })

      this.tickets = filter;
    }
    console.log(this.tickets);
  }

}
