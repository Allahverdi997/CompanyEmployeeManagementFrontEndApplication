import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { RouterModule } from '@angular/router';
import { AlldepartmentComponent } from './alldepartment/alldepartment.component';
import { HttpClientModule } from '@angular/common/http';
import { DepartmentComponent } from './department.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr/public_api';
import { DepartmenteditComponent } from './departmentedit/departmentedit.component';



@NgModule({
  declarations: [
    AlldepartmentComponent,
    DepartmentComponent,
    DepartmentDetailComponent,
    DepartmentAddComponent,
    DepartmenteditComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class DepartmentModule { }
