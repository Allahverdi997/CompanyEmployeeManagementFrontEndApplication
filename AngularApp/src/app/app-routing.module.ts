import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlldepartmentComponent } from './ui/components/department/alldepartment/alldepartment.component';
import { DepartmentAddComponent } from './ui/components/department/department-add/department-add.component';
import { DepartmentDetailComponent } from './ui/components/department/department-detail/department-detail.component';
import { DepartmentComponent } from './ui/components/department/department.component';
import { DepartmenteditComponent } from './ui/components/department/departmentedit/departmentedit.component';
import { AllemployeesComponent } from './ui/components/employee/allemployees/allemployees.component';
import { EmployeeAddComponent } from './ui/components/employee/employee-add/employee-add.component';
import { EmployeeDetailComponent } from './ui/components/employee/employee-detail/employee-detail.component';
import { EmployeeEditComponent } from './ui/components/employee/employee-edit/employee-edit.component';
import { EmployeeComponent } from './ui/components/employee/employee.component';
import { HomeComponent } from './ui/components/home/home/home.component';
import { LoginComponent } from './ui/components/home/login/login.component';
import { LayoutComponent } from './ui/components/layout/layout/layout.component';
import { LoginGuard } from './ui/guards/login.guard';

const routes=[
  {path:"login",component:LoginComponent,},
  {path:"",component:LayoutComponent,children:[
     {path:"",component:HomeComponent},
     {path:"withdepartment/:id",component:HomeComponent},
     {path:"employee",component:EmployeeComponent,children:[
        {path:"",component:AllemployeesComponent},
        {path:"add",component:EmployeeAddComponent,canActivate:[LoginGuard]},
        {path:"edit/:id",component:EmployeeEditComponent,canActivate:[LoginGuard]},
        {path:":id",component:EmployeeDetailComponent}
     ]},
     {path:"department",component:DepartmentComponent,children:[
      {path:"",component:AlldepartmentComponent},
      {path:"add",component:DepartmentAddComponent,canActivate:[LoginGuard]},
      {path:"edit/:id",component:DepartmenteditComponent,canActivate:[LoginGuard]},
      {path:":id",component:DepartmentDetailComponent}
   ]}
  ]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
