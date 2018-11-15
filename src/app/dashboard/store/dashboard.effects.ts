import { Injectable } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import * as actions from './dashboard.actions';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '~/app/auth.service';

@Injectable()
export class DashboardEffects {
	@Effect()
	fetchDashboardItems$: Observable<Action> = this.actions$
		.ofType(actions.FETCH_DASHBOARD_ITEMS)
		.pipe(
			switchMap(_ => this.auth.getAccessToken('')
				.pipe(
					map(_ => new actions.SetDashboardItems())
				))
		)

	constructor(private actions$: Actions, private http: HttpClient, private auth: AuthService) {
	}
} 