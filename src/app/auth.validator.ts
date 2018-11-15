
import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { AuthService } from './auth.service';
import { Store, select } from "@ngrx/store";
import { switchMap, tap } from "rxjs/operators";
import { of } from "rxjs";
import { ApplicationState, getAuthentication } from "./store";
import { AuthenticationData } from "./auth/AuthenticationData";

@Injectable()
export class AuthValidator implements CanActivate {
  constructor(
    private store: Store<ApplicationState>,
		private auth: AuthService
		) { }

  canActivate() {
    return this.store.pipe(
			select(getAuthentication),
      switchMap((auth: AuthenticationData) => this.auth.validateAuthentication(auth))
			// switchMap((auth: any) => this.authNew.validateAuthentication(auth))
			// switchMap((auth: AuthenticationData) => this.auth.validateAuthentication(auth))
    )
  }
}