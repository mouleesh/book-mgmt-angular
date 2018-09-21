import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from '../login/login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AuthGuardService } from '../service/auth/auth-guard.service';


const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'dashboard', component: DashboardComponent,canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
