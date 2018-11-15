import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../store';
import { Authenticate } from '../store/authentication.actions';

@Component({
	selector: 'Login',
	moduleId: module.id,
	templateUrl: './login.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
	constructor(private store: Store<ApplicationState>) { }

	login() {
		this.store.dispatch(new Authenticate('AUTHENTICATE!'));
	}
}
