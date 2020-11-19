import { Component, OnInit } from '@angular/core';
import {AccessDataService} from '../services/access-data.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  events = new Array();
  user:boolean;

  constructor(private accessData:AccessDataService) { }

  ngOnInit(): void {
    this.user = (localStorage.getItem('user') != null);
    this.accessData.getData().subscribe((response) => {
    this.events= response;
  });
  }

}

