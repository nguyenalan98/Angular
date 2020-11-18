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
  constructor(private accessData:AccessDataService) { }

  ngOnInit(): void {
    this.accessData.getData2().subscribe((response) => {
      this.tickets= response;
    });
    this.accessData.getData().subscribe((response) => {
      this.events= response;
    });
  }

}
