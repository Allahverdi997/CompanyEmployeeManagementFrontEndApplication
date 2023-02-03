import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { ControllerEnum } from 'src/app/ui/enums/controllerenum';
import { GetAllDepartmentResponseModel } from 'src/app/ui/models/department/GetAllDepartmentResponseModel';
import { GetDepartmentResponseModel } from 'src/app/ui/models/department/GetDepartmentResponseModel';
import { GeneralListResponseModel } from 'src/app/ui/models/general/GeneralListResponseModel';
import { DepartmentService } from 'src/app/ui/services/department/departmentservice.service';

@Component({
  selector: 'app-alldepartment',
  templateUrl: './alldepartment.component.html',
  styleUrls: ['./alldepartment.component.css']
})
export class AlldepartmentComponent {
  constructor(private service:DepartmentService){
    this.getDepartments();
}
  
  departments:Array<GetAllDepartmentResponseModel>;
  departmentId:number;
  department:GetAllDepartmentResponseModel | undefined;
  success:boolean;
  private ngUnsubcribe=new Subject<void>();
  deleteState:boolean;
  word:string="";

  getDepartments(){
      this.service.getAll<GetAllDepartmentResponseModel>(ControllerEnum.Department)
      .subscribe(
        (response)=> {this.departments=response.data.$values;this.success=response.success;this.department=this.departments[0]},
        (err)=>console.log(err))
  }

  delete(id:number)
  {
     this.service.delete<GetDepartmentResponseModel>(ControllerEnum.Department,id)
     .subscribe(
      (response)=> {this.deleteState=response.success;alert("Silindi");},
      (err)=>console.log(err))
  }

  searchword(event:any){
    this.word=event.value;
    if(event.value)
    {
      let filter="search/"+this.word;
      this.service.getAllByFilter<GetAllDepartmentResponseModel>(ControllerEnum.Department,filter)
      .subscribe(
        (response)=> {this.departments=response.data.$values;this.success=response.success},
        (err)=>console.log(err))
    }
    else
    {
      this.getDepartments();
    }
  }
}
