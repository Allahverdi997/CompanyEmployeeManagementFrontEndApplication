import { GeneralListDataResponseModel } from "./GeneralListDataResponseModel";

export class GeneralListResponseModel<T>{
    $id:string;
    message:string;
    data:GeneralListDataResponseModel<T>;
    success:boolean
}