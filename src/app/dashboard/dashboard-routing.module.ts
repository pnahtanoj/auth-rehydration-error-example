import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { DashboardComponent } from "./dashboard.component";
import { AuthValidator } from "../auth.validator";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      {
        path: "",
        loadChildren: "~/app/submodule-one/submodule-one.module#SubModuleOneModule",
        // canActivate: [AuthValidator]
      },
      {
        path: "submodtwo",
        loadChildren: "~/app/submodule-two/submodule-two.module#SubModuleTwoModule",
        // canActivate: [AuthValidator],
        pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class DashboardRoutingModule { }
