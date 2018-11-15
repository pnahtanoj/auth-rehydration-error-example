import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable, of } from 'rxjs';
import { map, tap, switchMap, flatMap } from "rxjs/operators";
import { ApplicationState, getAuthentication } from "./store";
import { AuthenticationData } from "./auth/AuthenticationData";
import { AuthenticationReply } from "./auth/AuthenticationReply";
import { AuthenticationSuccess } from "./store/authentication.actions";
import { RouterExtensions } from "nativescript-angular/router";
import { HttpClient } from "@angular/common/http";

export enum AuthenticationStatus {
	AUTHENTICATED,
	REFRESH_TOKEN,
	INVALID
}

@Injectable()
export class AuthService {
	constructor(
		private store: Store<ApplicationState>,
		private router: RouterExtensions,
		private http: HttpClient) {
	}

	validateAuthentication(data: AuthenticationData) {
		const currentAuthentication = this.isAuthenticated(data);

		switch (currentAuthentication) {
			case AuthenticationStatus.REFRESH_TOKEN:
				console.log('AUTH SERVICE VALIDATE --- REFRESH');

				return this.refreshAccessToken(data.refreshToken)
					.pipe(
						tap((data: AuthenticationReply) => this.store.dispatch(new AuthenticationSuccess(data))),
						map(() => true)
					);

			case AuthenticationStatus.AUTHENTICATED:
				// console.log('CAN ACTIVATE --- AUTHENTICATED');
				return of(true);

			case AuthenticationStatus.INVALID:
				console.log('CAN ACTIVATE --- INVALID');
				this.router.navigate(['login'], { clearHistory: true }); // might not want this here...

				return of(false);

			default:
				console.log('AUTH SERVICE VALIDATE --- DEFAULT');

				return of(false);
		}
	}

	isAuthenticated(data: AuthenticationData) {
		const currentDate = Date.now() / 1000;

		if (data.bearerToken && data.bearerExpiration && data.refreshToken) {
			if (currentDate < data.bearerExpiration) {
				return AuthenticationStatus.AUTHENTICATED;
			} else if (currentDate >= data.bearerExpiration) {
				return AuthenticationStatus.REFRESH_TOKEN;
			}
		}

		return AuthenticationStatus.INVALID;
	}

	getAuthToken(): Observable<any> {
		// console.log('GETTING AUTH TOKEN');
		return this.store.pipe(
			select(getAuthentication),
			switchMap((auth: AuthenticationData) => this.validateAuthentication(auth)),
			flatMap(() => {
				return this.store.select(getAuthentication)
			})
		)
	}

	getAccessToken(_code: string): Observable<AuthenticationReply> {
		return this.http.get('https://jsonplaceholder.typicode.com/todos/1')
			.pipe(
				map(mock => this.stubAccessToken()),
			);
	}

	refreshAccessToken(token: string): Observable<AuthenticationReply> {
		return of(this.stubAccessToken());
	}

	stubAccessToken(): AuthenticationReply {
		return {
			data: {
				access_token: 'slkjdfoiuwoeiurlsldjflsj======123',
				token_type: 'token',
				expires_in: '3600',
				refresh_token: 'adfsaREFRESHTOKENkjlsjsd-------123'
			}
		}
	}
}
