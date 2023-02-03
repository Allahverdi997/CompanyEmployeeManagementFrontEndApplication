import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor() { }

  static socialMedias:any=[
    {icon:"bi bi-facebook",url:"https://facebook.com"},
    {icon:"bi bi-twitter",url:"https://twitter.com"},
    {icon:"bi bi-google",url:"https://google.com"},
    {icon:"bi bi-instagram",url:"https://instagram.com"},
    {icon:"bi bi-linkedin",url:"https://linkedin.com"},
    {icon:"bi bi-github",url:"https://github.com"}
  ];
}
