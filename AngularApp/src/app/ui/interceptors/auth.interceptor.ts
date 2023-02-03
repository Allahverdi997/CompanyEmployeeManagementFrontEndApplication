import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    let newRequest:HttpRequest<any>=request;
    if(localStorage.getItem("token"))
    {
      let token:string|null=localStorage.getItem("token");
      newRequest=request.clone({
        headers:request.headers.set("AuthenticationToken",""+token)
      });
    }
    
    return next.handle(newRequest);
  }
}
