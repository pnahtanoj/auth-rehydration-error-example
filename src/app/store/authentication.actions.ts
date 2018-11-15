/* tslint:disable:max-classes-per-file */
import { Action } from '@ngrx/store';
import { AuthenticationReply } from '../auth/AuthenticationReply';

export const AUTHENTICATE = '[AUTHENTICATION] Authenticate';
export const AUTHENTICATION_SUCCESS = '[AUTHENTICATION] Authentication Success';
export const AUTHENTICATION_CLEAR = '[AUTHENTICATION] Authentication Clear';

export const LOGOUT = '[AUTHENTICATION] Logout';

export class Authenticate implements Action {
  readonly type = AUTHENTICATE;

  constructor(public payload: string) {
  }
}

export class AuthenticationSuccess implements Action {
  readonly type = AUTHENTICATION_SUCCESS;

  constructor(public payload: AuthenticationReply) {
  }
}

export class AuthenticationClear implements Action {
  readonly type = AUTHENTICATION_CLEAR;
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export type Actions =
  | Authenticate
  | AuthenticationSuccess
  | AuthenticationClear
  | Logout
  ;