import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { AuthValidator } from "./auth.validator";

const routes: Routes = [
	{ path: "", redirectTo: "/dashboard", pathMatch: "full" },
	{ path: "login", loadChildren: "~/app/login/login.module#LoginModule" },
	{ path: "dashboard", loadChildren: "~/app/dashboard/dashboard.module#DashboardModule", canActivate: [AuthValidator] },
	// { path: "", redirectTo: "/items", pathMatch: "full" },
	// { path: "items", component: ItemsComponent },
	// { path: "item/:id", component: ItemDetailComponent },
];

@NgModule({
	imports: [NativeScriptRouterModule.forRoot(routes)],
	exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }