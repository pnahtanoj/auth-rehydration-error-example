"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var submodule_one_component_1 = require("./submodule-one.component");
var router_1 = require("nativescript-angular/router");
var fromSubOne = require("./store/submodule-one.reducer");
var store_1 = require("@ngrx/store");
var effects_1 = require("@ngrx/effects");
var submodule_one_effects_1 = require("./store/submodule-one.effects");
var reducers = {
    subone: fromSubOne.reducer,
};
var routes = [
    { path: "", component: submodule_one_component_1.SubModuleOneComponent }
];
var SubModuleOneModule = /** @class */ (function () {
    function SubModuleOneModule() {
    }
    SubModuleOneModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                router_1.NativeScriptRouterModule.forChild(routes),
                store_1.StoreModule.forFeature('submodule-one', reducers),
                effects_1.EffectsModule.forFeature([submodule_one_effects_1.SubModuleOneEffects])
            ],
            declarations: [
                submodule_one_component_1.SubModuleOneComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], SubModuleOneModule);
    return SubModuleOneModule;
}());
exports.SubModuleOneModule = SubModuleOneModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibW9kdWxlLW9uZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdWJtb2R1bGUtb25lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFDdkUscUVBQWtFO0FBRWxFLHNEQUF1RTtBQUN2RSwwREFBNEQ7QUFDNUQscUNBQTBDO0FBQzFDLHlDQUE4QztBQUM5Qyx1RUFBb0U7QUFFcEUsSUFBTSxRQUFRLEdBQUc7SUFDaEIsTUFBTSxFQUFFLFVBQVUsQ0FBQyxPQUFPO0NBQzFCLENBQUM7QUFFRixJQUFNLE1BQU0sR0FBVztJQUNyQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLCtDQUFxQixFQUFFO0NBQy9DLENBQUM7QUFnQkY7SUFBQTtJQUFrQyxDQUFDO0lBQXRCLGtCQUFrQjtRQWQ5QixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1QsaUNBQXdCO2dCQUN4QixpQ0FBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO2dCQUN6QyxtQkFBVyxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsUUFBUSxDQUFDO2dCQUNqRCx1QkFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLDJDQUFtQixDQUFDLENBQUM7YUFDOUM7WUFDRCxZQUFZLEVBQUU7Z0JBQ2QsK0NBQXFCO2FBQ3BCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLHVCQUFnQjthQUNqQjtTQUNGLENBQUM7T0FDVyxrQkFBa0IsQ0FBSTtJQUFELHlCQUFDO0NBQUEsQUFBbkMsSUFBbUM7QUFBdEIsZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTdWJNb2R1bGVPbmVDb21wb25lbnQgfSBmcm9tICcuL3N1Ym1vZHVsZS1vbmUuY29tcG9uZW50JztcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0ICogYXMgZnJvbVN1Yk9uZSBmcm9tICcuL3N0b3JlL3N1Ym1vZHVsZS1vbmUucmVkdWNlcic7XG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IFN1Yk1vZHVsZU9uZUVmZmVjdHMgfSBmcm9tICcuL3N0b3JlL3N1Ym1vZHVsZS1vbmUuZWZmZWN0cyc7XG5cbmNvbnN0IHJlZHVjZXJzID0ge1xuXHRzdWJvbmU6IGZyb21TdWJPbmUucmVkdWNlcixcbn07XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogU3ViTW9kdWxlT25lQ29tcG9uZW50IH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcblx0XHROYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG5cdFx0TmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyksXG5cdFx0U3RvcmVNb2R1bGUuZm9yRmVhdHVyZSgnc3VibW9kdWxlLW9uZScsIHJlZHVjZXJzKSxcblx0XHRFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoW1N1Yk1vZHVsZU9uZUVmZmVjdHNdKVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcblx0XHRTdWJNb2R1bGVPbmVDb21wb25lbnRcbiAgXSxcbiAgc2NoZW1hczogW1xuICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWJNb2R1bGVPbmVNb2R1bGUgeyB9XG4iXX0=