import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule}    from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccessDataService} from './services/access-data.service';
import { HomeComponent } from './home/home.component';
import {LoginComponentComponent} from './login-component/login-component.component';
import {RegisterComponentComponent} from './register-component/register-component.component';
import { CompletedComponent } from './completed/completed.component';
import {RegisterTicketComponent} from './register-ticket/register-ticket.component'
import {NavComponent} from './nav/nav-component';
import {EventComponent} from './eventsPage/event.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponentComponent,
    RegisterComponentComponent,
    CompletedComponent,
    RegisterTicketComponent,
    NavComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AccessDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }