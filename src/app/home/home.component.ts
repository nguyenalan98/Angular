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

