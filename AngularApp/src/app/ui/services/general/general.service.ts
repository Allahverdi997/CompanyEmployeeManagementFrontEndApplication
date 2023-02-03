import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ControllerEnum } from '../../enums/controllerenum';
import { GetAllDepartmentResponseModel } from '../../models/department/GetAllDepartmentResponseModel';
import { GeneralListResponseModel } from '../../models/general/GeneralListResponseModel';
import { GeneralResponseModel } from '../../models/general/GeneralResponseModel';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private client:HttpClient) { }

  url:string="https://localhost:44307/api/";

   getAll<T>(controller:ControllerEnum):Observable<GeneralListResponseModel<T>>{
    return this.client.get<GeneralListResponseModel<T>>(this.url+controller);
   }


   getById<T>(controller:ControllerEnum,id:number):Observable<GeneralResponseModel<T>>{
    return this.client.get<GeneralResponseModel<T>>(this.url+controller+"/"+id);
   }

   getAllByFilter<T>(controller:ControllerEnum,filter:string):Observable<GeneralListResponseModel<T>>{
    return this.client.get<GeneralListResponseModel<T>>(this.url+controller+"/"+filter);
   }

   add<T>(controller:ControllerEnum,source:any):Observable<GeneralResponseModel<T>>{
    let model=Object.assign({},source);
    return this.client.post<GeneralResponseModel<T>>(this.url+controller,model);
   }

   edit<T>(controller:ControllerEnum,source:any):Observable<GeneralResponseModel<T>>{
    let model=Object.assign({},source);
    return this.client.put<GeneralResponseModel<T>>(this.url+controller,model);
   }

   getToken<T>(controller:ControllerEnum,source:any):Observable<GeneralResponseModel<T>>{
    let model=Object.assign({},source);
    return this.client.post<GeneralResponseModel<T>>(this.url+controller+"/Login",model);
   }

   delete<T>(controller:ControllerEnum,id:number):Observable<GeneralResponseModel<T>>
   {
      return this.client.delete<GeneralResponseModel<T>>(this.url+controller+"/"+id.toString());
   }
}
