import { Component, OnInit } from '@angular/core';
import {AccessDataService} from '../services/access-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  events = new Array();
  user:boolean;

  constructor(private accessData:AccessDataService) { }

  ngOnInit(): void {
    this.user = (JSON.parse(localStorage.getItem('user')) != null);
    console.log(this.user);
    this.accessData.getData().subscribe((response) => {
    this.events= response;
  });
  }

}

