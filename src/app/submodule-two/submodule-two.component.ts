import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../store';
import { FetchSubModule222Items } from './store/submodule-two.actions';

@Component({
	selector: 'SubModuleTwo',
	moduleId: module.id,
	templateUrl: './submodule-two.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubModuleTwoComponent {
	constructor(private router: RouterExtensions, private store: Store<ApplicationState>) { 
		this.store.dispatch(new FetchSubModule222Items());
	}

	goToOne() {
		this.router.navigate(['/dashboard'], {
			clearHistory: true,
			animated: true,
			transition:
			{
				name: 'slideLeft',
				duration: 300,
				curve: 'linear'
			}
		});
	}
}
