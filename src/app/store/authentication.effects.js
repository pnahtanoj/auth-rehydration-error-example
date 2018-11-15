"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var effects_1 = require("@ngrx/effects");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var actions = require("./authentication.actions");
var auth_service_1 = require("../auth.service");
var AuthenticationEffects = /** @class */ (function () {
    function AuthenticationEffects(actions$, router, auth) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.auth = auth;
        this.authenticate$ = this.actions$
            .ofType(actions.AUTHENTICATE)
            .pipe(operators_1.tap(function (c) { return console.log('AUTHENTICATE'); }), operators_1.switchMap(function (action) {
            return _this.auth.getAccessToken(action.payload).pipe(operators_1.tap(function (c) { return console.log('AUTHENTICATE (AFTER)'); }), operators_1.tap(function (data) { return console.log('LOGIN DATA', data); }), operators_1.map(function (data) { return new actions.AuthenticationSuccess(data); })
            // catchError(error => new actions.AuthenticationError(error))
            );
        }));
        this.authenticationSuccess$ = this.actions$
            .ofType(actions.AUTHENTICATION_SUCCESS)
            .pipe(operators_1.switchMap(function (action) { return _this.router.navigate(['/dashboard']); }));
        this.logout$ = this.actions$
            .ofType(actions.LOGOUT)
            .pipe(operators_1.switchMap(function (action) { return _this.router.navigate(['login'], { clearHistory: true }); }), operators_1.map(function (_) { return new actions.AuthenticationClear(); }));
    }
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", rxjs_1.Observable)
    ], AuthenticationEffects.prototype, "authenticate$", void 0);
    __decorate([
        effects_1.Effect({
            dispatch: false
        }),
        __metadata("design:type", rxjs_1.Observable)
    ], AuthenticationEffects.prototype, "authenticationSuccess$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", rxjs_1.Observable)
    ], AuthenticationEffects.prototype, "logout$", void 0);
    AuthenticationEffects = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [effects_1.Actions,
            router_1.RouterExtensions,
            auth_service_1.AuthService])
    ], AuthenticationEffects);
    return AuthenticationEffects;
}());
exports.AuthenticationEffects = AuthenticationEffects;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1dGhlbnRpY2F0aW9uLmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0RBQStEO0FBQy9ELHlDQUFnRDtBQUVoRCw2QkFBa0M7QUFDbEMsNENBQXFEO0FBRXJELGtEQUFvRDtBQUNwRCxnREFBOEM7QUFJOUM7SUFnQ0MsK0JBQ1MsUUFBaUIsRUFDakIsTUFBd0IsRUFDeEIsSUFBaUI7UUFIMUIsaUJBSUM7UUFIUSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLFNBQUksR0FBSixJQUFJLENBQWE7UUFqQzFCLGtCQUFhLEdBQXVCLElBQUksQ0FBQyxRQUFRO2FBQy9DLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO2FBQzVCLElBQUksQ0FDSixlQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUEzQixDQUEyQixDQUFDLEVBQ3JDLHFCQUFTLENBQUMsVUFBQyxNQUE0QjtZQUN0QyxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQzVDLGVBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsRUFBbkMsQ0FBbUMsQ0FBQyxFQUM3QyxlQUFHLENBQUMsVUFBQyxJQUF5QixJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLEVBQS9CLENBQStCLENBQUMsRUFDbkUsZUFBRyxDQUFDLFVBQUMsSUFBeUIsSUFBSyxPQUFBLElBQUksT0FBTyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxFQUF2QyxDQUF1QyxDQUFDO1lBQzNFLDhEQUE4RDthQUM5RDtRQUxELENBS0MsQ0FBQyxDQUNILENBQUM7UUFLSCwyQkFBc0IsR0FBb0IsSUFBSSxDQUFDLFFBQVE7YUFDckQsTUFBTSxDQUFnQyxPQUFPLENBQUMsc0JBQXNCLENBQUM7YUFDckUsSUFBSSxDQUNKLHFCQUFTLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQXBDLENBQW9DLENBQUMsQ0FDekQsQ0FBQztRQUdILFlBQU8sR0FBdUIsSUFBSSxDQUFDLFFBQVE7YUFDekMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7YUFDdEIsSUFBSSxDQUNKLHFCQUFTLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQXZELENBQXVELENBQUMsRUFDNUUsZUFBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsSUFBSSxPQUFPLENBQUMsbUJBQW1CLEVBQUUsRUFBakMsQ0FBaUMsQ0FBQyxDQUMzQyxDQUFDO0lBTUgsQ0FBQztJQWxDRDtRQURDLGdCQUFNLEVBQUU7a0NBQ00saUJBQVU7Z0VBV3RCO0lBS0g7UUFIQyxnQkFBTSxDQUFDO1lBQ1AsUUFBUSxFQUFFLEtBQUs7U0FDZixDQUFDO2tDQUNzQixpQkFBVTt5RUFJL0I7SUFHSDtRQURDLGdCQUFNLEVBQUU7a0NBQ0EsaUJBQVU7MERBS2hCO0lBOUJTLHFCQUFxQjtRQURqQyxpQkFBVSxFQUFFO3lDQWtDTyxpQkFBTztZQUNULHlCQUFnQjtZQUNsQiwwQkFBVztPQW5DZCxxQkFBcUIsQ0FxQ2pDO0lBQUQsNEJBQUM7Q0FBQSxBQXJDRCxJQXFDQztBQXJDWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEVmZmVjdCwgQWN0aW9ucyB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuL2F1dGhlbnRpY2F0aW9uLmFjdGlvbnMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25SZXBseSB9IGZyb20gJy4uL2F1dGgvQXV0aGVudGljYXRpb25SZXBseSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvbkVmZmVjdHMge1xuXHRARWZmZWN0KClcblx0YXV0aGVudGljYXRlJDogT2JzZXJ2YWJsZTxBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJFxuXHRcdC5vZlR5cGUoYWN0aW9ucy5BVVRIRU5USUNBVEUpXG5cdFx0LnBpcGUoXG5cdFx0XHR0YXAoYyA9PiBjb25zb2xlLmxvZygnQVVUSEVOVElDQVRFJykpLFxuXHRcdFx0c3dpdGNoTWFwKChhY3Rpb246IGFjdGlvbnMuQXV0aGVudGljYXRlKSA9PlxuXHRcdFx0XHR0aGlzLmF1dGguZ2V0QWNjZXNzVG9rZW4oYWN0aW9uLnBheWxvYWQpLnBpcGUoXG5cdFx0XHRcdFx0dGFwKGMgPT4gY29uc29sZS5sb2coJ0FVVEhFTlRJQ0FURSAoQUZURVIpJykpLFxuXHRcdFx0XHRcdHRhcCgoZGF0YTogQXV0aGVudGljYXRpb25SZXBseSkgPT4gY29uc29sZS5sb2coJ0xPR0lOIERBVEEnLCBkYXRhKSksXG5cdFx0XHRcdFx0bWFwKChkYXRhOiBBdXRoZW50aWNhdGlvblJlcGx5KSA9PiBuZXcgYWN0aW9ucy5BdXRoZW50aWNhdGlvblN1Y2Nlc3MoZGF0YSkpXG5cdFx0XHRcdFx0Ly8gY2F0Y2hFcnJvcihlcnJvciA9PiBuZXcgYWN0aW9ucy5BdXRoZW50aWNhdGlvbkVycm9yKGVycm9yKSlcblx0XHRcdFx0KSksXG5cdFx0KTtcblxuXHRARWZmZWN0KHtcblx0XHRkaXNwYXRjaDogZmFsc2Vcblx0fSlcblx0YXV0aGVudGljYXRpb25TdWNjZXNzJDogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5hY3Rpb25zJFxuXHRcdC5vZlR5cGU8YWN0aW9ucy5BdXRoZW50aWNhdGlvblN1Y2Nlc3M+KGFjdGlvbnMuQVVUSEVOVElDQVRJT05fU1VDQ0VTUylcblx0XHQucGlwZShcblx0XHRcdHN3aXRjaE1hcChhY3Rpb24gPT4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZGFzaGJvYXJkJ10pKSxcblx0XHQpO1xuXG5cdEBFZmZlY3QoKVxuXHRsb2dvdXQkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPSB0aGlzLmFjdGlvbnMkXG5cdFx0Lm9mVHlwZShhY3Rpb25zLkxPR09VVClcblx0XHQucGlwZShcblx0XHRcdHN3aXRjaE1hcChhY3Rpb24gPT4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydsb2dpbiddLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KSksXG5cdFx0XHRtYXAoXyA9PiBuZXcgYWN0aW9ucy5BdXRoZW50aWNhdGlvbkNsZWFyKCkpXG5cdFx0KTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuXHRcdHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxuXHRcdHByaXZhdGUgYXV0aDogQXV0aFNlcnZpY2UpIHtcblx0fVxufSAiXX0=