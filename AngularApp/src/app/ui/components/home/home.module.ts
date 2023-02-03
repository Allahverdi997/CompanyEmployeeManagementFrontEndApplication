import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DepartmentInfoComponent } from './department-info/department-info.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    DepartmentInfoComponent,
    EmployeeInfoComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterLink,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
