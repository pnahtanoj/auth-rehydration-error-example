"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var dashboard_component_1 = require("./dashboard.component");
var routes = [
    {
        path: "",
        component: dashboard_component_1.DashboardComponent,
        children: [
            {
                path: "",
                loadChildren: "~/app/submodule-one/submodule-one.module#SubModuleOneModule",
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
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());
exports.DashboardRoutingModule = DashboardRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGFzaGJvYXJkLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUN2RSw2REFBMkQ7QUFHM0QsSUFBTSxNQUFNLEdBQVc7SUFDckI7UUFDRSxJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSx3Q0FBa0I7UUFDN0IsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsWUFBWSxFQUFFLDZEQUE2RDthQUU1RTtZQUNEO2dCQUNFLElBQUksRUFBRSxXQUFXO2dCQUNqQixZQUFZLEVBQUUsNkRBQTZEO2dCQUMzRSxnQ0FBZ0M7Z0JBQ2hDLFNBQVMsRUFBRSxNQUFNO2FBQ2xCO1NBQ0Y7S0FDRjtDQUNGLENBQUM7QUFNRjtJQUFBO0lBQXNDLENBQUM7SUFBMUIsc0JBQXNCO1FBSmxDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUNwQyxDQUFDO09BQ1csc0JBQXNCLENBQUk7SUFBRCw2QkFBQztDQUFBLEFBQXZDLElBQXVDO0FBQTFCLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IERhc2hib2FyZENvbXBvbmVudCB9IGZyb20gXCIuL2Rhc2hib2FyZC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEF1dGhWYWxpZGF0b3IgfSBmcm9tIFwiLi4vYXV0aC52YWxpZGF0b3JcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiBcIlwiLFxuICAgIGNvbXBvbmVudDogRGFzaGJvYXJkQ29tcG9uZW50LFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiXCIsXG4gICAgICAgIGxvYWRDaGlsZHJlbjogXCJ+L2FwcC9zdWJtb2R1bGUtb25lL3N1Ym1vZHVsZS1vbmUubW9kdWxlI1N1Yk1vZHVsZU9uZU1vZHVsZVwiLFxuICAgICAgICAvLyBjYW5BY3RpdmF0ZTogW0F1dGhWYWxpZGF0b3JdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcInN1Ym1vZHR3b1wiLFxuICAgICAgICBsb2FkQ2hpbGRyZW46IFwifi9hcHAvc3VibW9kdWxlLXR3by9zdWJtb2R1bGUtdHdvLm1vZHVsZSNTdWJNb2R1bGVUd29Nb2R1bGVcIixcbiAgICAgICAgLy8gY2FuQWN0aXZhdGU6IFtBdXRoVmFsaWRhdG9yXSxcbiAgICAgICAgcGF0aE1hdGNoOiBcImZ1bGxcIlxuICAgICAgfVxuICAgIF1cbiAgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkUm91dGluZ01vZHVsZSB7IH1cbiJdfQ==