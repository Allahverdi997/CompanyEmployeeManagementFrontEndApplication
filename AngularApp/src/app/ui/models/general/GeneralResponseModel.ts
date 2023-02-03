import { GeneralDataResponseModel } from "./GeneralDataResponseModel";

export class GeneralResponseModel<T>{
    $id:string;
    message:string;
    data:T;
    success:boolean
}