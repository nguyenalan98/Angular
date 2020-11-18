import { Component, OnInit } from '@angular/core';
import {AccessDataService} from '../services/access-data.service';

@Component({
  selector: 'navbar',
  templateUrl: './nav-component.html',
  styleUrls: ['./nav-component.css']
})
export class NavComponent implements OnInit {

  user = null;
  auth = null;

  constructor(private accessData:AccessDataService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.auth = (this.user.auth == "admin");
  }

}

