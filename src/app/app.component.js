"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var auth_service_1 = require("./auth.service");
var store_1 = require("@ngrx/store");
var AppComponent = /** @class */ (function () {
    function AppComponent(auth, store) {
        this.auth = auth;
        this.store = store;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            moduleId: module.id,
            templateUrl: "./app.component.html",
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService, store_1.Store])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsK0NBQTZDO0FBQzdDLHFDQUFvQztBQVNwQztJQUNDLHNCQUFvQixJQUFpQixFQUFVLEtBQThCO1FBQXpELFNBQUksR0FBSixJQUFJLENBQWE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUF5QjtJQUM3RSxDQUFDO0lBRlcsWUFBWTtRQUx4QixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxzQkFBc0I7U0FDbkMsQ0FBQzt5Q0FFeUIsMEJBQVcsRUFBaUIsYUFBSztPQUQvQyxZQUFZLENBR3hCO0lBQUQsbUJBQUM7Q0FBQSxBQUhELElBR0M7QUFIWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCIuL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSBmcm9tIFwiLi9zdG9yZVwiO1xuaW1wb3J0IHsgQXV0aGVudGljYXRlLCBMb2dvdXQgfSBmcm9tIFwiLi9zdG9yZS9hdXRoZW50aWNhdGlvbi5hY3Rpb25zXCI7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJucy1hcHBcIixcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0dGVtcGxhdGVVcmw6IFwiLi9hcHAuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhdXRoOiBBdXRoU2VydmljZSwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwbGljYXRpb25TdGF0ZT4pIHsgXG5cdH1cbn1cbiJdfQ==