import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import {CompletedComponent} from './completed/completed.component'
import {LogoutComponent} from './logout/logout.component';
import { AuthGuardService } from './services/auth-guard.service';
import {adminWarn} from './adminWarning/adminWarn.component';
import {EventComponent} from './eventsPage/event.component';

const routes: Routes = [
  {path:'',component:LoginComponentComponent},
  {path:'home', component: HomeComponent},
  {path:'events',component:EventComponent},
  {path:'tickets',component:CompletedComponent},
  {path:'mustBeAdmin',component:adminWarn},
  {path:'logout',component:LogoutComponent},
  {path:'login',component:LoginComponentComponent},
  {path:'not-found',component:PageNotFoundComponent},
  {path:'**', redirectTo:'/not-found',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
