import { Component, AfterViewInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { ApplicationState } from "../store";
import { Logout } from "../store/authentication.actions";
import { FetchDashboardItems } from "./store/dashboard.actions";

/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "dashboard", loadChildren: "./dashboard/dashboard.module#DashboardModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/

@Component({
	selector: "Dashboard",
	moduleId: module.id,
	templateUrl: "./dashboard.component.html"
})

export class DashboardComponent {
	constructor(private store: Store<ApplicationState>) {
		this.store.dispatch(new FetchDashboardItems());
	}
	
	logout() {
		this.store.dispatch(new Logout());
	}
}
