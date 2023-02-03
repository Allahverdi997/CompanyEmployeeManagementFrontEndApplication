import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeneralService } from '../general/general.service';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService extends GeneralService {

  constructor(client:HttpClient) {
    super(client);
   }

}
