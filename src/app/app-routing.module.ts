import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontComponent } from './front/front.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserMTComponent } from './user-mt/user-mt.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardDemandComponent } from './dashboard-demand/dashboard-demand.component';
import { DashboardQualiteComponent } from './dashboard-qualite/dashboard-qualite.component';
import { DashboardLogisticComponent } from './dashboard-logistic/dashboard-logistic.component';

const routes: Routes = [
  { path: '', redirectTo: '/front', pathMatch: 'full' }, // Redirect from empty path to /login
  { path: 'login', component: LoginComponent }, // Route for the home page
  { path: 'signup', component: SignupComponent }, // Route for the home page
  { path: 'front', component: FrontComponent }, // Route for the home page

  { path: 'userMT', component: UserMTComponent }, // Route for the home page
  { path: 'dashboard', component: DashboardComponent }, // Route for the home page
  { path: 'dashboard', component: DashboardComponent }, // Route for the home page

  { path: 'dashboardDemand', component: DashboardDemandComponent }, // Route for the home page
  { path: 'dashboardQualite', component: DashboardQualiteComponent }, // Route for the home page
  { path: 'dashboardLogistic', component: DashboardLogisticComponent }, // Route for the home page







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
