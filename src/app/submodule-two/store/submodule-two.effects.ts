import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import * as actions from './submodule-two.actions';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '~/app/auth.service';

@Injectable()
export class SubModuleTwoEffects {
	@Effect()
	fetchDashboardItems$: Observable<Action> = this.actions$
		.ofType(actions.FETCH_SUBMODULE_2222222_ITEMS)
		.pipe(
			switchMap(_ => this.auth.getAccessToken('')
				.pipe(
					map(_ => new actions.SetSubModule222Items())
				))
		)

	constructor(private actions$: Actions, private http: HttpClient, private auth: AuthService) {
	}
} 