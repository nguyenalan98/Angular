import { Component, OnInit } from '@angular/core';
import {AccessDataService} from '../services/access-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  events = new Array();

  constructor(private accessData:AccessDataService) { }

  ngOnInit(): void {

    this.accessData.getData().subscribe((response) => {
    this.events= response;
    console.log(this.events);
  });
  }

}

