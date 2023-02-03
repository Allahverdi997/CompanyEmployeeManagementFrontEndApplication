import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './ui/components/home/home.module';
import { LayoutModule } from './ui/components/layout/layout.module';
import { EmployeeComponent } from './ui/components/employee/employee.component';
import { EmployeeModule } from './ui/components/employee/employee.module';
import { DepartmentComponent } from './ui/components/department/department.component';
import { DepartmentModule } from './ui/components/department/department.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './ui/interceptors/auth.interceptor';
import { ErrorhandlingInterceptor } from './ui/interceptors/errorhandling.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HomeModule,
    EmployeeModule,
    DepartmentModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true},{provide:HTTP_INTERCEPTORS,useClass:ErrorhandlingInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
