import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs';
import {HttpClientModule} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class GetOrdersService {
  baseUrl:string;

  constructor(private http: HttpClient) { 
  }

  getData(): Observable<any>{
    return this.http.get("assets/db.json");
  }
}