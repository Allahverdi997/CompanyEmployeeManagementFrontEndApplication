import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { LayoutModule } from '../layout/layout.module';
import { AllemployeesComponent } from './allemployees/allemployees.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';



@NgModule({
  declarations: [
      AllemployeesComponent,
      EmployeeComponent,
      EmployeeDetailComponent,
      EmployeeAddComponent,
      EmployeeEditComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class EmployeeModule { }
