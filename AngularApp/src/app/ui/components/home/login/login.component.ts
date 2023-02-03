import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ControllerEnum } from 'src/app/ui/enums/controllerenum';
import { userTokenResponseModel } from 'src/app/ui/models/user/userTokenResponseModel';
import { UserService } from 'src/app/ui/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private service:UserService,private route:Router) {
    
  }

  userModel:userTokenResponseModel;

  cardForm=new FormGroup({
    userName:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })

  login(){
    this.service.getToken<userTokenResponseModel>(ControllerEnum.User,this.cardForm.value)
    .subscribe(
      (response)=>{this.userModel=response.data,localStorage.setItem("token",response.data.token),this.route.navigate([""])},
      (err)=>{alert("Uzgunuz Eklenemedi");console.log(err)}
    )
  }
}
