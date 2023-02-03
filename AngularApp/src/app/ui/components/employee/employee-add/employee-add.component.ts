import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ControllerEnum } from 'src/app/ui/enums/controllerenum';
import { GetAllDepartmentResponseModel } from 'src/app/ui/models/department/GetAllDepartmentResponseModel';
import { DepartmentService } from 'src/app/ui/services/department/departmentservice.service';
import { EmployeeService } from 'src/app/ui/services/employee/employee.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {
  constructor(private service:EmployeeService){}
  ngOnInit(): void {
     this.getDepartments();
  }
  success:boolean;
  departments:Array<GetAllDepartmentResponseModel>;
  
  cardForm=new FormGroup({
    name:new FormControl(null,Validators.required),
    departmentId:new FormControl('',Validators.required),
    surname:new FormControl('',Validators.required),
    birthDate:new FormControl('',Validators.required)
  })

  getDepartments(){
    this.service.getAll<GetAllDepartmentResponseModel>(ControllerEnum.Department)
    .subscribe(
      (response)=> {this.departments=response.data.$values;},
      (err)=>console.log(err))
}
  
  add(){
    this.service.add<any>(ControllerEnum.Employee,this.cardForm.value)
    .subscribe(
      (response)=>{alert("Basariyla Eklendi")},
      (err)=>{alert("Uzgunuz Eklenemedi");console.log(err)}
    )
  }
}
