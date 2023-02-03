import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ControllerEnum } from 'src/app/ui/enums/controllerenum';
import { GetAllEmployeeResponseModel } from 'src/app/ui/models/employee/GetAllEmployeeResponseModel';
import { GeneralListResponseModel } from 'src/app/ui/models/general/GeneralListResponseModel';
import { EmployeeService } from 'src/app/ui/services/employee/employee.service';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent {
  constructor(private service:EmployeeService,private acvtivateRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.acvtivateRoute.params.subscribe((_params)=>{
      if(_params["id"])
      {
        this.getEmployeesWithDep(_params["id"]);
      }
      else
      {
        this.getEmployees();
      }
    })
  }

  employees:Array<GetAllEmployeeResponseModel>;
  success:boolean;
  depId:number=1005;

  getEmployees(){
       this.service.getAll<GetAllEmployeeResponseModel>(ControllerEnum.Employee)
       .subscribe(
        (response)=> {this.employees=response.data.$values;this.success=response.success},
        (err)=>console.log(err))
       }

   getEmployeesWithDep(id:number){
    this.service.getAllByFilter<GetAllEmployeeResponseModel>(ControllerEnum.Employee,"department/"+id)
    .subscribe(
      (response)=> {this.employees=response.data.$values;this.success=response.success,console.log(response)},
      (err)=>console.log(err));
  }
}
