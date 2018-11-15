import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { SubModuleOneComponent } from './submodule-one.component';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import * as fromSubOne from './store/submodule-one.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SubModuleOneEffects } from './store/submodule-one.effects';

const reducers = {
	subone: fromSubOne.reducer,
};

const routes: Routes = [
  { path: "", component: SubModuleOneComponent }
];

@NgModule({
  imports: [
		NativeScriptCommonModule,
		NativeScriptRouterModule.forChild(routes),
		StoreModule.forFeature('submodule-one', reducers),
		EffectsModule.forFeature([SubModuleOneEffects])
  ],
  declarations: [
		SubModuleOneComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class SubModuleOneModule { }
