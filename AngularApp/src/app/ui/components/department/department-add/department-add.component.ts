import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { GeneralResponseModel } from 'src/app/ui/models/general/GeneralResponseModel';
import { DepartmentService } from 'src/app/ui/services/department/departmentservice.service';
import { ControllerEnum } from 'src/app/ui/enums/controllerenum';


@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css']
})
export class DepartmentAddComponent implements OnInit {
  constructor(private service:DepartmentService){}

  success:boolean;

  ngOnInit(): void {

  }

  cardForm=new FormGroup({
    name:new FormControl(null,Validators.required),
    description:new FormControl('',Validators.required)
  })

  add(){
    this.service.add<any>(ControllerEnum.Department,this.cardForm.value)
    .subscribe(
      (response)=>{alert("Basariyla Eklendi")},
      (err)=>{alert("Uzgunuz Eklenemedi");console.log(err)}
    )
  }
}
