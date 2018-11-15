import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { SubModuleTwoComponent } from './submodule-two.component';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import * as fromSubTwo from './store/submodule-two.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SubModuleTwoEffects } from './store/submodule-two.effects';

const reducers = {
	subtwo: fromSubTwo.reducer,
};

const routes: Routes = [
  { path: "", component: SubModuleTwoComponent }
];

@NgModule({
  imports: [
		NativeScriptCommonModule,
		NativeScriptRouterModule.forChild(routes),
		StoreModule.forFeature('submodule-two', reducers),
		EffectsModule.forFeature([SubModuleTwoEffects])
  ],
  declarations: [
		SubModuleTwoComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class SubModuleTwoModule { }
