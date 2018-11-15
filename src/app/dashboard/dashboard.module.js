"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var dashboard_routing_module_1 = require("./dashboard-routing.module");
var dashboard_component_1 = require("./dashboard.component");
var store_1 = require("@ngrx/store");
var fromDashboard = require("./store/dashboard.reducer");
var effects_1 = require("@ngrx/effects");
var dashboard_effects_1 = require("./store/dashboard.effects");
var reducers = {
    dashboard: fromDashboard.reducer,
};
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            imports: [
                dashboard_routing_module_1.DashboardRoutingModule,
                common_1.NativeScriptCommonModule,
                store_1.StoreModule.forFeature('dashboard', reducers),
                effects_1.EffectsModule.forFeature([dashboard_effects_1.DashboardEffects])
            ],
            declarations: [
                dashboard_component_1.DashboardComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBQ3ZFLHVFQUFvRTtBQUNwRSw2REFBMkQ7QUFDM0QscUNBQTBDO0FBQzFDLHlEQUEyRDtBQUMzRCx5Q0FBOEM7QUFDOUMsK0RBQTZEO0FBRTdELElBQU0sUUFBUSxHQUFHO0lBQ2hCLFNBQVMsRUFBRSxhQUFhLENBQUMsT0FBTztDQUNoQyxDQUFDO0FBaUJGO0lBQUE7SUFBK0IsQ0FBQztJQUFuQixlQUFlO1FBZjNCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpREFBc0I7Z0JBQzFCLGlDQUF3QjtnQkFDeEIsbUJBQVcsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQztnQkFDN0MsdUJBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxvQ0FBZ0IsQ0FBQyxDQUFDO2FBQzNDO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLHdDQUFrQjthQUNyQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BRVcsZUFBZSxDQUFJO0lBQUQsc0JBQUM7Q0FBQSxBQUFoQyxJQUFnQztBQUFuQiwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEYXNoYm9hcmRSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vZGFzaGJvYXJkLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tIFwiLi9kYXNoYm9hcmQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xuaW1wb3J0ICogYXMgZnJvbURhc2hib2FyZCBmcm9tICcuL3N0b3JlL2Rhc2hib2FyZC5yZWR1Y2VyJztcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xuaW1wb3J0IHsgRGFzaGJvYXJkRWZmZWN0cyB9IGZyb20gXCIuL3N0b3JlL2Rhc2hib2FyZC5lZmZlY3RzXCI7XG5cbmNvbnN0IHJlZHVjZXJzID0ge1xuXHRkYXNoYm9hcmQ6IGZyb21EYXNoYm9hcmQucmVkdWNlcixcbn07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBEYXNoYm9hcmRSb3V0aW5nTW9kdWxlLFxuXHRcdFx0XHROYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG5cdFx0XHRcdFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoJ2Rhc2hib2FyZCcsIHJlZHVjZXJzKSxcblx0XHRcdFx0RWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFtEYXNoYm9hcmRFZmZlY3RzXSlcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBEYXNoYm9hcmRDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRNb2R1bGUgeyB9XG4iXX0=