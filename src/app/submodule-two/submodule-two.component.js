"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var store_1 = require("@ngrx/store");
var submodule_two_actions_1 = require("./store/submodule-two.actions");
var SubModuleTwoComponent = /** @class */ (function () {
    function SubModuleTwoComponent(router, store) {
        this.router = router;
        this.store = store;
        this.store.dispatch(new submodule_two_actions_1.FetchSubModule222Items());
    }
    SubModuleTwoComponent.prototype.goToOne = function () {
        this.router.navigate(['/dashboard'], {
            clearHistory: true,
            animated: true,
            transition: {
                name: 'slideLeft',
                duration: 300,
                curve: 'linear'
            }
        });
    };
    SubModuleTwoComponent = __decorate([
        core_1.Component({
            selector: 'SubModuleTwo',
            moduleId: module.id,
            templateUrl: './submodule-two.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, store_1.Store])
    ], SubModuleTwoComponent);
    return SubModuleTwoComponent;
}());
exports.SubModuleTwoComponent = SubModuleTwoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibW9kdWxlLXR3by5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdWJtb2R1bGUtdHdvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFtRTtBQUNuRSxzREFBK0Q7QUFDL0QscUNBQW9DO0FBRXBDLHVFQUF1RTtBQVF2RTtJQUNDLCtCQUFvQixNQUF3QixFQUFVLEtBQThCO1FBQWhFLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBeUI7UUFDbkYsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSw4Q0FBc0IsRUFBRSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELHVDQUFPLEdBQVA7UUFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQ3BDLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFFBQVEsRUFBRSxJQUFJO1lBQ2QsVUFBVSxFQUNWO2dCQUNDLElBQUksRUFBRSxXQUFXO2dCQUNqQixRQUFRLEVBQUUsR0FBRztnQkFDYixLQUFLLEVBQUUsUUFBUTthQUNmO1NBQ0QsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQWhCVyxxQkFBcUI7UUFOakMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsZ0NBQWdDO1lBQzdDLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1NBQy9DLENBQUM7eUNBRTJCLHlCQUFnQixFQUFpQixhQUFLO09BRHRELHFCQUFxQixDQWlCakM7SUFBRCw0QkFBQztDQUFBLEFBakJELElBaUJDO0FBakJZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gZnJvbSAnLi4vc3RvcmUnO1xuaW1wb3J0IHsgRmV0Y2hTdWJNb2R1bGUyMjJJdGVtcyB9IGZyb20gJy4vc3RvcmUvc3VibW9kdWxlLXR3by5hY3Rpb25zJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnU3ViTW9kdWxlVHdvJyxcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0dGVtcGxhdGVVcmw6ICcuL3N1Ym1vZHVsZS10d28uY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBTdWJNb2R1bGVUd29Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwbGljYXRpb25TdGF0ZT4pIHsgXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgRmV0Y2hTdWJNb2R1bGUyMjJJdGVtcygpKTtcblx0fVxuXG5cdGdvVG9PbmUoKSB7XG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZGFzaGJvYXJkJ10sIHtcblx0XHRcdGNsZWFySGlzdG9yeTogdHJ1ZSxcblx0XHRcdGFuaW1hdGVkOiB0cnVlLFxuXHRcdFx0dHJhbnNpdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogJ3NsaWRlTGVmdCcsXG5cdFx0XHRcdGR1cmF0aW9uOiAzMDAsXG5cdFx0XHRcdGN1cnZlOiAnbGluZWFyJ1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59XG4iXX0=