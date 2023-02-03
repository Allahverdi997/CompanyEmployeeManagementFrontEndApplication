import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { GetAllDepartmentResponseModel } from 'src/app/ui/models/department/GetAllDepartmentResponseModel';
import { GeneralListResponseModel } from 'src/app/ui/models/general/GeneralListResponseModel';
import { DepartmentService } from 'src/app/ui/services/department/departmentservice.service';
import { ControllerEnum } from 'src/app/ui/enums/controllerenum';

@Component({
  selector: 'app-department-info',
  templateUrl: './department-info.component.html',
  styleUrls: ['./department-info.component.css']
})
export class DepartmentInfoComponent {
  constructor(private departmentService:DepartmentService){
    this.getDepartments();
}
  departments:Array<GetAllDepartmentResponseModel>;
  departmentId:number;
  department:GetAllDepartmentResponseModel | undefined;
  success:boolean;

   getDepartments(){
      this.departmentService.getAll<GetAllDepartmentResponseModel>(ControllerEnum.Department)
       .subscribe(
       (response)=> {this.departments=response.data.$values;this.success=response.success;this.department=this.departments[0]},
       (err)=>console.log(err))
     }

  changeDepartment(id:number){
     this.department=this.departments.find(x=>x.id==id);
  }

  setClass(id:number):string
  {
    let dep=this.departments.find(x=>x.id==id);
    if(this.department===dep)
    {
      return "list-group-item active";
    }
    else
    {
       return "list-group-item";
    }
  }
}
