import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ItemService } from "./item/item.service";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { StoreModule, ActionReducer, MetaReducer } from "@ngrx/store";
import * as fromAuth from './store/authentication.reducer';
import { AuthService } from "./auth.service";
import { localStorageSync } from 'ngrx-store-localstorage';
import { AuthValidator } from "./auth.validator";
import { EffectsModule } from "@ngrx/effects";
import { AuthenticationEffects } from "./store/authentication.effects";
import { AuthInterceptor } from "./auth/auth.interceptor";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

const localStorage = require("nativescript-localstorage");

const localStorageSyncConfig = {
	keys: ['authentication'],
	rehydrate: true
};

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
	return localStorageSync(localStorageSyncConfig)(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

const appReducers = {
	authentication: fromAuth.reducer,
};

@NgModule({
	bootstrap: [
		AppComponent
	],
	imports: [
		NativeScriptModule,
    NativeScriptCommonModule,
    NativeScriptHttpModule,
    HttpClientModule,
		AppRoutingModule,
		StoreModule.forRoot(appReducers, { metaReducers }),
		EffectsModule.forRoot([AuthenticationEffects])
	],
	declarations: [
		AppComponent,
		ItemsComponent,
		ItemDetailComponent
	],
	providers: [
		ItemService,
		AuthService,
		AuthValidator,
		{
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
	],
	schemas: [
		NO_ERRORS_SCHEMA
	]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
