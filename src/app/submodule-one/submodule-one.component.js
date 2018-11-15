"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var store_1 = require("@ngrx/store");
var submodule_one_actions_1 = require("./store/submodule-one.actions");
var SubModuleOneComponent = /** @class */ (function () {
    function SubModuleOneComponent(router, store) {
        this.router = router;
        this.store = store;
        this.store.dispatch(new submodule_one_actions_1.FetchSubModule111Items());
    }
    SubModuleOneComponent.prototype.goToTwo = function () {
        this.router.navigate(['/dashboard/submodtwo'], {
            clearHistory: true,
            animated: true,
            transition: {
                name: 'slideLeft',
                duration: 300,
                curve: 'linear'
            }
        });
    };
    SubModuleOneComponent = __decorate([
        core_1.Component({
            selector: 'SubModuleOne',
            moduleId: module.id,
            templateUrl: './submodule-one.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, store_1.Store])
    ], SubModuleOneComponent);
    return SubModuleOneComponent;
}());
exports.SubModuleOneComponent = SubModuleOneComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibW9kdWxlLW9uZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdWJtb2R1bGUtb25lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFtRTtBQUNuRSxzREFBK0Q7QUFDL0QscUNBQW9DO0FBRXBDLHVFQUF1RTtBQVF2RTtJQUVDLCtCQUFvQixNQUF3QixFQUFVLEtBQThCO1FBQWhFLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBeUI7UUFDbkYsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSw4Q0FBc0IsRUFBRSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELHVDQUFPLEdBQVA7UUFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLEVBQUU7WUFDOUMsWUFBWSxFQUFFLElBQUk7WUFDbEIsUUFBUSxFQUFFLElBQUk7WUFDZCxVQUFVLEVBQ1Y7Z0JBQ0MsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLFFBQVEsRUFBRSxHQUFHO2dCQUNiLEtBQUssRUFBRSxRQUFRO2FBQ2Y7U0FDRCxDQUFDLENBQUE7SUFDSCxDQUFDO0lBakJXLHFCQUFxQjtRQU5qQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxnQ0FBZ0M7WUFDN0MsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07U0FDL0MsQ0FBQzt5Q0FHMkIseUJBQWdCLEVBQWlCLGFBQUs7T0FGdEQscUJBQXFCLENBa0JqQztJQUFELDRCQUFDO0NBQUEsQUFsQkQsSUFrQkM7QUFsQlksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQgeyBGZXRjaFN1Yk1vZHVsZTExMUl0ZW1zIH0gZnJvbSAnLi9zdG9yZS9zdWJtb2R1bGUtb25lLmFjdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdTdWJNb2R1bGVPbmUnLFxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3VibW9kdWxlLW9uZS5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFN1Yk1vZHVsZU9uZUNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcGxpY2F0aW9uU3RhdGU+KSB7XG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgRmV0Y2hTdWJNb2R1bGUxMTFJdGVtcygpKTtcblx0fVxuXG5cdGdvVG9Ud28oKSB7XG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZGFzaGJvYXJkL3N1Ym1vZHR3byddLCB7XG5cdFx0XHRjbGVhckhpc3Rvcnk6IHRydWUsXG5cdFx0XHRhbmltYXRlZDogdHJ1ZSxcblx0XHRcdHRyYW5zaXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6ICdzbGlkZUxlZnQnLFxuXHRcdFx0XHRkdXJhdGlvbjogMzAwLFxuXHRcdFx0XHRjdXJ2ZTogJ2xpbmVhcidcblx0XHRcdH1cblx0XHR9KVxuXHR9XG59XG4iXX0=