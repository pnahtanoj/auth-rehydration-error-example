/* tslint:disable:max-classes-per-file */
import { Action } from '@ngrx/store';

export const FETCH_SUBMODULE_1111111_ITEMS = '[SUBMODULE_1111111] Fetch Items';
export const SET_SUBMODULE_1111111_ITEMS = '[SUBMODULE_1111111] Set Items';

export class FetchSubModule111Items implements Action {
  readonly type = FETCH_SUBMODULE_1111111_ITEMS;
}

export class SetSubModule111Items implements Action {
  readonly type = SET_SUBMODULE_1111111_ITEMS;
}


export type Actions =
  | FetchSubModule111Items
  | SetSubModule111Items
  ;