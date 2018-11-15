import { Injectable } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import * as actions from './authentication.actions';
import { AuthService } from '../auth.service';
import { AuthenticationReply } from '../auth/AuthenticationReply';

@Injectable()
export class AuthenticationEffects {
	@Effect()
	authenticate$: Observable<Action> = this.actions$
		.ofType(actions.AUTHENTICATE)
		.pipe(
			tap(c => console.log('AUTHENTICATE')),
			map((data: AuthenticationReply) => new actions.AuthenticationSuccess(this.auth.stubAccessToken()))
		);

	@Effect({
		dispatch: false
	})
	authenticationSuccess$: Observable<any> = this.actions$
		.ofType<actions.AuthenticationSuccess>(actions.AUTHENTICATION_SUCCESS)
		.pipe(
			switchMap(action => this.router.navigate(['/dashboard'])),
		);

	@Effect()
	logout$: Observable<Action> = this.actions$
		.ofType(actions.LOGOUT)
		.pipe(
			switchMap(action => this.router.navigate(['login'], { clearHistory: true })),
			map(_ => new actions.AuthenticationClear())
		);

	constructor(
		private actions$: Actions,
		private router: RouterExtensions,
		private auth: AuthService) {
	}
} 