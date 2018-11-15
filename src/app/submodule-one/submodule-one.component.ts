import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../store';
import { FetchSubModule111Items } from './store/submodule-one.actions';

@Component({
	selector: 'SubModuleOne',
	moduleId: module.id,
	templateUrl: './submodule-one.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubModuleOneComponent {

	constructor(private router: RouterExtensions, private store: Store<ApplicationState>) {
		this.store.dispatch(new FetchSubModule111Items());
	}

	goToTwo() {
		this.router.navigate(['/dashboard/submodtwo'], {
			clearHistory: true,
			animated: true,
			transition:
			{
				name: 'slideLeft',
				duration: 300,
				curve: 'linear'
			}
		})
	}
}
