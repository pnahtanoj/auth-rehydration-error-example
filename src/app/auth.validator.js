"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var auth_service_1 = require("./auth.service");
var store_1 = require("@ngrx/store");
var operators_1 = require("rxjs/operators");
var store_2 = require("./store");
var AuthValidator = /** @class */ (function () {
    function AuthValidator(store, auth) {
        this.store = store;
        this.auth = auth;
    }
    AuthValidator.prototype.canActivate = function () {
        var _this = this;
        return this.store.pipe(store_1.select(store_2.getAuthentication), operators_1.switchMap(function (auth) { return _this.auth.validateAuthentication(auth); })
        // switchMap((auth: any) => this.authNew.validateAuthentication(auth))
        // switchMap((auth: AuthenticationData) => this.auth.validateAuthentication(auth))
        );
    };
    AuthValidator = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [store_1.Store,
            auth_service_1.AuthService])
    ], AuthValidator);
    return AuthValidator;
}());
exports.AuthValidator = AuthValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC52YWxpZGF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoLnZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUEyQztBQUUzQywrQ0FBNkM7QUFDN0MscUNBQTRDO0FBQzVDLDRDQUFnRDtBQUVoRCxpQ0FBOEQ7QUFJOUQ7SUFDRSx1QkFDVSxLQUE4QixFQUNoQyxJQUFpQjtRQURmLFVBQUssR0FBTCxLQUFLLENBQXlCO1FBQ2hDLFNBQUksR0FBSixJQUFJLENBQWE7SUFDckIsQ0FBQztJQUVMLG1DQUFXLEdBQVg7UUFBQSxpQkFPQztRQU5DLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDdkIsY0FBTSxDQUFDLHlCQUFpQixDQUFDLEVBQ3RCLHFCQUFTLENBQUMsVUFBQyxJQUF3QixJQUFLLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsRUFBdEMsQ0FBc0MsQ0FBQztRQUNsRixzRUFBc0U7UUFDdEUsa0ZBQWtGO1NBQ2hGLENBQUE7SUFDSCxDQUFDO0lBYlUsYUFBYTtRQUR6QixpQkFBVSxFQUFFO3lDQUdNLGFBQUs7WUFDUiwwQkFBVztPQUhkLGFBQWEsQ0FjekI7SUFBRCxvQkFBQztDQUFBLEFBZEQsSUFjQztBQWRZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENhbkFjdGl2YXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBTdG9yZSwgc2VsZWN0IH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XG5pbXBvcnQgeyBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSwgZ2V0QXV0aGVudGljYXRpb24gfSBmcm9tIFwiLi9zdG9yZVwiO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25EYXRhIH0gZnJvbSBcIi4vYXV0aC9BdXRoZW50aWNhdGlvbkRhdGFcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhWYWxpZGF0b3IgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcGxpY2F0aW9uU3RhdGU+LFxuXHRcdHByaXZhdGUgYXV0aDogQXV0aFNlcnZpY2Vcblx0XHQpIHsgfVxuXG4gIGNhbkFjdGl2YXRlKCkge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG5cdFx0XHRzZWxlY3QoZ2V0QXV0aGVudGljYXRpb24pLFxuICAgICAgc3dpdGNoTWFwKChhdXRoOiBBdXRoZW50aWNhdGlvbkRhdGEpID0+IHRoaXMuYXV0aC52YWxpZGF0ZUF1dGhlbnRpY2F0aW9uKGF1dGgpKVxuXHRcdFx0Ly8gc3dpdGNoTWFwKChhdXRoOiBhbnkpID0+IHRoaXMuYXV0aE5ldy52YWxpZGF0ZUF1dGhlbnRpY2F0aW9uKGF1dGgpKVxuXHRcdFx0Ly8gc3dpdGNoTWFwKChhdXRoOiBBdXRoZW50aWNhdGlvbkRhdGEpID0+IHRoaXMuYXV0aC52YWxpZGF0ZUF1dGhlbnRpY2F0aW9uKGF1dGgpKVxuICAgIClcbiAgfVxufSJdfQ==