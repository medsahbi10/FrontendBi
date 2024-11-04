import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontComponent } from './front/front.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserMTComponent } from './user-mt/user-mt.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardDemandComponent } from './dashboard-demand/dashboard-demand.component';
import { DashboardLogisticComponent } from './dashboard-logistic/dashboard-logistic.component';
import { DashboardQualiteComponent } from './dashboard-qualite/dashboard-qualite.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    LoginComponent,
    SignupComponent,
    UserMTComponent,
    DashboardComponent,
    DashboardDemandComponent,
    DashboardLogisticComponent,
    DashboardQualiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule // Add HttpClientModule here

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
