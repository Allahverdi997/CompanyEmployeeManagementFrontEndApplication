import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { ControllerEnum } from 'src/app/ui/enums/controllerenum';
import { GetDepartmentResponseModel } from 'src/app/ui/models/department/GetDepartmentResponseModel';
import { DepartmentService } from 'src/app/ui/services/department/departmentservice.service';

@Component({
  selector: 'app-departmentedit',
  templateUrl: './departmentedit.component.html',
  styleUrls: ['./departmentedit.component.css']
})
export class DepartmenteditComponent {
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
        (res)=>{this.department=res.data},
        (err)=>{console.log(err)}
     );
  }

  ngOnDestroy(): void {
    this.ngUnsubcribe.unsubscribe();
  }


  cardForm=new FormGroup({
    id:new FormControl(),
    name:new FormControl(null,Validators.required),
    description:new FormControl('',Validators.required)
  })

  edit(){
    console.log(this.cardForm);
    this.service.edit<any>(ControllerEnum.Department,this.cardForm.value)
    .subscribe(
      (response)=>{alert("Basariyla Eklendi")},
      (err)=>{alert("Uzgunuz Eklenemedi");console.log(err)}
    )
  }
}
