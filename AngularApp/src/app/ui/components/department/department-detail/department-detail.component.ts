import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ControllerEnum } from 'src/app/ui/enums/controllerenum';
import { GetDepartmentResponseModel } from 'src/app/ui/models/department/GetDepartmentResponseModel';
import { GetEmployeeResponseModel } from 'src/app/ui/models/employee/GetEmployeeResponseModel';
import { GeneralResponseModel } from 'src/app/ui/models/general/GeneralResponseModel';
import { DepartmentService } from 'src/app/ui/services/department/departmentservice.service';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnDestroy {
  constructor(private service:DepartmentService,private route:ActivatedRoute){}
  

  private ngUnsubcribe=new Subject<void>();

  ngOnInit(): void {
     this.route.params.subscribe((_param)=>{
      if(_param["id"])
      {
          this.getDepartment(_param["id"]);
      }
     })
  }

  department:GetDepartmentResponseModel | undefined;

  getDepartment(id:number){
      this.service.getById<GetDepartmentResponseModel>(ControllerEnum.Department,id)
      .subscribe(
        (res)=>{this.department=res.data,console.log(res.data),console.log(res.data)},
        (err)=>{console.log(err)}
     );
  }

  ngOnDestroy(): void {
    this.ngUnsubcribe.unsubscribe();
  }
}
