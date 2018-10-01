import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from '@shared/layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from '@shared/layout/main-layout/main-layout.component';
import { AuthGuardService } from './service/auth/auth-guard.service';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    loadChildren: 'app/auth/auth.module#AuthModule'
  },
  {
    path: 'en-us',
    component: MainLayoutComponent,
    data: {pageTitle: 'Home'},
    canLoad: [AuthGuardService],
    loadChildren: 'app/main/main.module#MainModule'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [];