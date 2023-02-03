import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetAllEmployeeResponseModel } from 'src/app/ui/models/employee/GetAllEmployeeResponseModel';
import { GeneralListResponseModel } from 'src/app/ui/models/general/GeneralListResponseModel';
import { NgModel } from '@angular/forms';
import { DepartmentService } from 'src/app/ui/services/department/departmentservice.service';
import { ControllerEnum } from 'src/app/ui/enums/controllerenum';
import { GetEmployeeResponseModel } from 'src/app/ui/models/employee/GetEmployeeResponseModel';

@Component({
  selector: 'app-allemployees',
  templateUrl: './allemployees.component.html',
  styleUrls: ['./allemployees.component.css']
})
export class AllemployeesComponent {
  constructor(private service:DepartmentService,private acvtivateRoute:ActivatedRoute){}
  ngOnInit(): void {
        if(this.word=="")
        {
           
        }
        this.getEmployees();
  }

  employees:Array<GetAllEmployeeResponseModel>;
  success:boolean;
  depId:number=1005;
  deleteState:boolean;
  word:string="";

  getEmployees(){
       this.service.getAll<GetAllEmployeeResponseModel>(ControllerEnum.Employee)
       .subscribe(
        (response)=> {this.employees=response.data.$values;this.success=response.success},
        (err)=>console.log(err))
  }

  delete(id:number)
  {
     this.service.delete<GetEmployeeResponseModel>(ControllerEnum.Employee,id)
     .subscribe(
      (response)=> {this.deleteState=response.success;alert("Silindi");},
      (err)=>console.log(err))
  }

  searchword(event:any){
    this.word=event.value;
    if(event.value)
    {
      let filter="search/"+this.word;
      this.service.getAllByFilter<GetAllEmployeeResponseModel>(ControllerEnum.Employee,filter)
      .subscribe(
        (response)=> {this.employees=response.data.$values;this.success=response.success},
        (err)=>console.log(err))
    }
    else
    {
      this.getEmployees();
    }
  }
    
}
