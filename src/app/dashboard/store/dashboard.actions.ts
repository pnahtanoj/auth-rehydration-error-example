/* tslint:disable:max-classes-per-file */
import { Action } from '@ngrx/store';

export const FETCH_DASHBOARD_ITEMS = '[DASHBOARD] Fetch Items';
export const SET_DASHBOARD_ITEMS = '[DASHBOARD] Set Items';

export class FetchDashboardItems implements Action {
  readonly type = FETCH_DASHBOARD_ITEMS;
}

export class SetDashboardItems implements Action {
  readonly type = SET_DASHBOARD_ITEMS;
}


export type Actions =
  | FetchDashboardItems
  | SetDashboardItems
  ;