import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let headersConfig  : any = {};
    // const token = this.userService.getToken();
    // if (token) {
    //   headersConfig['Authorization'] = `Bearer ${token}`;
    //   headersConfig['X-Requested-With'] = `XMLHttpRequest`; 
    // }
    const request = req.clone({ setHeaders: headersConfig });
    
    return next.handle(request);
  }
}