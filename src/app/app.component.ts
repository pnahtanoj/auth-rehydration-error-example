import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
import { Store } from "@ngrx/store";
import { ApplicationState } from "./store";
import { Authenticate, Logout } from "./store/authentication.actions";

@Component({
	selector: "ns-app",
	moduleId: module.id,
	templateUrl: "./app.component.html",
})
export class AppComponent {
	constructor(private auth: AuthService, private store: Store<ApplicationState>) { 
	}
}
