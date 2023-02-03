import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ControllerEnum } from 'src/app/ui/enums/controllerenum';
import { GetEmployeeResponseModel } from 'src/app/ui/models/employee/GetEmployeeResponseModel';
import { GeneralListResponseModel } from 'src/app/ui/models/general/GeneralListResponseModel';
import { GeneralResponseModel } from 'src/app/ui/models/general/GeneralResponseModel';
import { EmployeeService } from 'src/app/ui/services/employee/employee.service';
import { __param } from 'tslib';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
   constructor(private service:EmployeeService,private route:ActivatedRoute){}

  ngOnInit(): void {
     this.route.params.subscribe((_param)=>{
      if(_param["id"])
      {
          this.getEmployee(_param["id"]);
      }
     })
  }
  employee:GetEmployeeResponseModel | undefined;

  getEmployee(id:number){
      this.service.getById<GetEmployeeResponseModel>(ControllerEnum.Employee,id)
      .subscribe(
         (res)=>{this.employee=res.data,console.log(res.data),console.log(res.data)},
         (err)=>{console.log(err)}
      );
  }
}
