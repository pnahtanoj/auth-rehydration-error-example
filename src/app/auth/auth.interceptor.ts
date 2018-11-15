import { Injectable } from '@angular/core';
import {
	HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	constructor(private auth: AuthService) {
	}

	intercept(req: HttpRequest<any>, next: HttpHandler) {
		// return next.handle(req);
		return this.auth.getAuthToken().pipe(switchMap(_ => next.handle(req)));
	}
}