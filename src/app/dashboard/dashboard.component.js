"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var authentication_actions_1 = require("../store/authentication.actions");
var dashboard_actions_1 = require("./store/dashboard.actions");
/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "dashboard", loadChildren: "./dashboard/dashboard.module#DashboardModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(store) {
        this.store = store;
        this.store.dispatch(new dashboard_actions_1.FetchDashboardItems());
    }
    DashboardComponent.prototype.logout = function () {
        this.store.dispatch(new authentication_actions_1.Logout());
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: "Dashboard",
            moduleId: module.id,
            templateUrl: "./dashboard.component.html"
        }),
        __metadata("design:paramtypes", [store_1.Store])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQscUNBQW9DO0FBRXBDLDBFQUF5RDtBQUN6RCwrREFBZ0U7QUFFaEU7Ozs7OzhEQUs4RDtBQVE5RDtJQUNDLDRCQUFvQixLQUE4QjtRQUE5QixVQUFLLEdBQUwsS0FBSyxDQUF5QjtRQUNqRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLHVDQUFtQixFQUFFLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsbUNBQU0sR0FBTjtRQUNDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksK0JBQU0sRUFBRSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQVBXLGtCQUFrQjtRQU45QixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw0QkFBNEI7U0FDekMsQ0FBQzt5Q0FHMEIsYUFBSztPQURwQixrQkFBa0IsQ0FROUI7SUFBRCx5QkFBQztDQUFBLEFBUkQsSUFRQztBQVJZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9IGZyb20gXCIuLi9zdG9yZVwiO1xuaW1wb3J0IHsgTG9nb3V0IH0gZnJvbSBcIi4uL3N0b3JlL2F1dGhlbnRpY2F0aW9uLmFjdGlvbnNcIjtcbmltcG9ydCB7IEZldGNoRGFzaGJvYXJkSXRlbXMgfSBmcm9tIFwiLi9zdG9yZS9kYXNoYm9hcmQuYWN0aW9uc1wiO1xuXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuKiBCZWZvcmUgeW91IGNhbiBuYXZpZ2F0ZSB0byB0aGlzIHBhZ2UgZnJvbSB5b3VyIGFwcCwgeW91IG5lZWQgdG8gcmVmZXJlbmNlIHRoaXMgcGFnZSdzIG1vZHVsZSBpbiB0aGVcbiogZ2xvYmFsIGFwcCByb3V0ZXIgbW9kdWxlLiBBZGQgdGhlIGZvbGxvd2luZyBvYmplY3QgdG8gdGhlIGdsb2JhbCBhcnJheSBvZiByb3V0ZXM6XG4qIHsgcGF0aDogXCJkYXNoYm9hcmRcIiwgbG9hZENoaWxkcmVuOiBcIi4vZGFzaGJvYXJkL2Rhc2hib2FyZC5tb2R1bGUjRGFzaGJvYXJkTW9kdWxlXCIgfVxuKiBOb3RlIHRoYXQgdGhpcyBzaW1wbHkgcG9pbnRzIHRoZSBwYXRoIHRvIHRoZSBwYWdlIG1vZHVsZSBmaWxlLiBJZiB5b3UgbW92ZSB0aGUgcGFnZSwgeW91IG5lZWQgdG8gdXBkYXRlIHRoZSByb3V0ZSB0b28uXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiRGFzaGJvYXJkXCIsXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHRlbXBsYXRlVXJsOiBcIi4vZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sXCJcbn0pXG5cbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBsaWNhdGlvblN0YXRlPikge1xuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEZldGNoRGFzaGJvYXJkSXRlbXMoKSk7XG5cdH1cblx0XG5cdGxvZ291dCgpIHtcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBMb2dvdXQoKSk7XG5cdH1cbn1cbiJdfQ==