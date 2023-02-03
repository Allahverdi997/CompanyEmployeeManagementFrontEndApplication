import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { ControllerEnum } from 'src/app/ui/enums/controllerenum';
import { GetAllDepartmentResponseModel } from 'src/app/ui/models/department/GetAllDepartmentResponseModel';
import { GetEmployeeResponseModel } from 'src/app/ui/models/employee/GetEmployeeResponseModel';
import { DepartmentService } from 'src/app/ui/services/department/departmentservice.service';
import { EmployeeService } from 'src/app/ui/services/employee/employee.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent {
  constructor(private service:EmployeeService,private departmentService:DepartmentService,private route:ActivatedRoute){}
  

  ngOnInit(): void {
     this.route.params.subscribe((_param)=>{
      if(_param["id"])
      {
          this.getEmployee(_param["id"]);
          this.getDepartments();
      }
     })
  }

  employee:GetEmployeeResponseModel | undefined;
  departments:Array<GetAllDepartmentResponseModel>;

  getEmployee(id:number){
      this.service.getById<GetEmployeeResponseModel>(ControllerEnum.Employee,id)
      .subscribe(
        (res)=>{this.employee=res.data},
        (err)=>{console.log(err)}
     );
  }

  getDepartments(){
    this.service.getAll<GetAllDepartmentResponseModel>(ControllerEnum.Department)
    .subscribe(
      (response)=> {this.departments=response.data.$values;},
      (err)=>console.log(err))
}

  cardForm=new FormGroup({
    id:new FormControl(),
    name:new FormControl(null,Validators.required),
    surname:new FormControl('',Validators.required),
    departmentId:new FormControl('',Validators.required),
    birthDate:new FormControl('',Validators.required)
  })

  changeCity(e: any) {
    if(e.value)
    {
      //this.employee?.departmentId=e.value as number;
    }
    
    };

  edit(){
    console.log(this.cardForm);
    this.service.edit<any>(ControllerEnum.Employee,this.cardForm.value)
    .subscribe(
      (response)=>{alert("Basariyla Eklendi")},
      (err)=>{alert("Uzgunuz Eklenemedi");console.log(err)}
    )
  }
}
