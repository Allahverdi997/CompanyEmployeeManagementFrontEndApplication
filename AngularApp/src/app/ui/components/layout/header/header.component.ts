import { Component } from '@angular/core';
import { AuthService } from 'src/app/ui/services/general/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
   constructor(private authService:AuthService) {
        this.showuserprofile();
   }

   showuser:boolean;

   showuserprofile(){
      if(this.authService.isAuthenticated())
      {
        this.showuser=true;
      }
      else{
        this.showuser=false;
      }
   }
}
