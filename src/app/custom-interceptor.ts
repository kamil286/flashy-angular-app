// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// import 'rxjs/operators/map';

// @Injectable()
// export class CustomInterceptor implements HttpInterceptor {
// 	constructor() { }

// 	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
// 		if (req.responseType == 'json') {
// 			req = req.clone({ responseType: 'text' });

// 			return next.handle(req).map(response => {
// 				if (response instanceof HttpResponse) {
// 					response = response.clone<any>({ body: JSON.parse(response.body) });
// 				}

// 				return response;
// 			});
// 		}

// 		return next.handle(req);
// 	}
// }