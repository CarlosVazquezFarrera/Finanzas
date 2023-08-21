import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { dashboardRoutes } from './dashboard/dashboard.routes';

export enum appRoutesKey {
  login = "login",
  register = "register",
  dashboard = ""
}

const routes: Routes = [
  { path: appRoutesKey.login, component: LoginComponent },
  { path: appRoutesKey.register, component: RegisterComponent },
  { path: appRoutesKey.dashboard, component: DashboardComponent, children: dashboardRoutes },
  { path: '**', redirectTo: appRoutesKey.dashboard },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
