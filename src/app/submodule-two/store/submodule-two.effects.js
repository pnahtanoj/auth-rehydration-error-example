"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var effects_1 = require("@ngrx/effects");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var actions = require("./submodule-two.actions");
var http_1 = require("@angular/common/http");
var auth_service_1 = require("~/app/auth.service");
var SubModuleTwoEffects = /** @class */ (function () {
    function SubModuleTwoEffects(actions$, http, auth) {
        var _this = this;
        this.actions$ = actions$;
        this.http = http;
        this.auth = auth;
        this.fetchDashboardItems$ = this.actions$
            .ofType(actions.FETCH_SUBMODULE_2222222_ITEMS)
            .pipe(operators_1.switchMap(function (_) { return _this.auth.getAccessToken('')
            .pipe(operators_1.map(function (_) { return new actions.SetSubModule222Items(); })); }));
    }
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", rxjs_1.Observable)
    ], SubModuleTwoEffects.prototype, "fetchDashboardItems$", void 0);
    SubModuleTwoEffects = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [effects_1.Actions, http_1.HttpClient, auth_service_1.AuthService])
    ], SubModuleTwoEffects);
    return SubModuleTwoEffects;
}());
exports.SubModuleTwoEffects = SubModuleTwoEffects;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibW9kdWxlLXR3by5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3VibW9kdWxlLXR3by5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHlDQUFnRDtBQUVoRCw2QkFBa0M7QUFDbEMsNENBQWdEO0FBRWhELGlEQUFtRDtBQUNuRCw2Q0FBa0Q7QUFDbEQsbURBQWlEO0FBR2pEO0lBV0MsNkJBQW9CLFFBQWlCLEVBQVUsSUFBZ0IsRUFBVSxJQUFpQjtRQUExRixpQkFDQztRQURtQixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQWE7UUFUMUYseUJBQW9CLEdBQXVCLElBQUksQ0FBQyxRQUFRO2FBQ3RELE1BQU0sQ0FBQyxPQUFPLENBQUMsNkJBQTZCLENBQUM7YUFDN0MsSUFBSSxDQUNKLHFCQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUM7YUFDekMsSUFBSSxDQUNKLGVBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLElBQUksT0FBTyxDQUFDLG9CQUFvQixFQUFFLEVBQWxDLENBQWtDLENBQUMsQ0FDNUMsRUFIYSxDQUdiLENBQUMsQ0FDSCxDQUFBO0lBR0YsQ0FBQztJQVZEO1FBREMsZ0JBQU0sRUFBRTtrQ0FDYSxpQkFBVTtxRUFPOUI7SUFUVSxtQkFBbUI7UUFEL0IsaUJBQVUsRUFBRTt5Q0FZa0IsaUJBQU8sRUFBZ0IsaUJBQVUsRUFBZ0IsMEJBQVc7T0FYOUUsbUJBQW1CLENBYS9CO0lBQUQsMEJBQUM7Q0FBQSxBQWJELElBYUM7QUFiWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFZmZlY3QsIEFjdGlvbnMgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4vc3VibW9kdWxlLXR3by5hY3Rpb25zJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJ34vYXBwL2F1dGguc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdWJNb2R1bGVUd29FZmZlY3RzIHtcblx0QEVmZmVjdCgpXG5cdGZldGNoRGFzaGJvYXJkSXRlbXMkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPSB0aGlzLmFjdGlvbnMkXG5cdFx0Lm9mVHlwZShhY3Rpb25zLkZFVENIX1NVQk1PRFVMRV8yMjIyMjIyX0lURU1TKVxuXHRcdC5waXBlKFxuXHRcdFx0c3dpdGNoTWFwKF8gPT4gdGhpcy5hdXRoLmdldEFjY2Vzc1Rva2VuKCcnKVxuXHRcdFx0XHQucGlwZShcblx0XHRcdFx0XHRtYXAoXyA9PiBuZXcgYWN0aW9ucy5TZXRTdWJNb2R1bGUyMjJJdGVtcygpKVxuXHRcdFx0XHQpKVxuXHRcdClcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLCBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgYXV0aDogQXV0aFNlcnZpY2UpIHtcblx0fVxufSAiXX0=