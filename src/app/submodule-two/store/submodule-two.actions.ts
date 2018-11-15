/* tslint:disable:max-classes-per-file */
import { Action } from '@ngrx/store';

export const FETCH_SUBMODULE_2222222_ITEMS = '[SUBMODULE_2222222] Fetch Items';
export const SET_SUBMODULE_2222222_ITEMS = '[SUBMODULE_2222222] Set Items';

export class FetchSubModule222Items implements Action {
  readonly type = FETCH_SUBMODULE_2222222_ITEMS;
}

export class SetSubModule222Items implements Action {
  readonly type = SET_SUBMODULE_2222222_ITEMS;
}


export type Actions =
  | FetchSubModule222Items
  | SetSubModule222Items
  ;