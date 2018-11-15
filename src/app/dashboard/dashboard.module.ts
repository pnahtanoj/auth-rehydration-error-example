import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { StoreModule } from "@ngrx/store";
import * as fromDashboard from './store/dashboard.reducer';
import { EffectsModule } from "@ngrx/effects";
import { DashboardEffects } from "./store/dashboard.effects";

const reducers = {
	dashboard: fromDashboard.reducer,
};

@NgModule({
    imports: [
        DashboardRoutingModule,
				NativeScriptCommonModule,
				StoreModule.forFeature('dashboard', reducers),
				EffectsModule.forFeature([DashboardEffects])
    ],
    declarations: [
        DashboardComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class DashboardModule { }
