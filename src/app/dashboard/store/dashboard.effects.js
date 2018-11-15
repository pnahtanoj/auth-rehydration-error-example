"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var effects_1 = require("@ngrx/effects");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var actions = require("./dashboard.actions");
var http_1 = require("@angular/common/http");
var auth_service_1 = require("~/app/auth.service");
var DashboardEffects = /** @class */ (function () {
    function DashboardEffects(actions$, http, auth) {
        var _this = this;
        this.actions$ = actions$;
        this.http = http;
        this.auth = auth;
        this.fetchDashboardItems$ = this.actions$
            .ofType(actions.FETCH_DASHBOARD_ITEMS)
            .pipe(operators_1.switchMap(function (_) { return _this.auth.getAccessToken('')
            .pipe(operators_1.map(function (_) { return new actions.SetDashboardItems(); })); }));
    }
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", rxjs_1.Observable)
    ], DashboardEffects.prototype, "fetchDashboardItems$", void 0);
    DashboardEffects = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [effects_1.Actions, http_1.HttpClient, auth_service_1.AuthService])
    ], DashboardEffects);
    return DashboardEffects;
}());
exports.DashboardEffects = DashboardEffects;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmVmZmVjdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXNoYm9hcmQuZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyx5Q0FBZ0Q7QUFFaEQsNkJBQWtDO0FBQ2xDLDRDQUFxRDtBQUVyRCw2Q0FBK0M7QUFDL0MsNkNBQWtEO0FBQ2xELG1EQUFpRDtBQUdqRDtJQVdDLDBCQUFvQixRQUFpQixFQUFVLElBQWdCLEVBQVUsSUFBaUI7UUFBMUYsaUJBQ0M7UUFEbUIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUFVLFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFhO1FBVDFGLHlCQUFvQixHQUF1QixJQUFJLENBQUMsUUFBUTthQUN0RCxNQUFNLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDO2FBQ3JDLElBQUksQ0FDSixxQkFBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDO2FBQ3pDLElBQUksQ0FDSixlQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxJQUFJLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxFQUEvQixDQUErQixDQUFDLENBQ3pDLEVBSGEsQ0FHYixDQUFDLENBQ0gsQ0FBQTtJQUdGLENBQUM7SUFWRDtRQURDLGdCQUFNLEVBQUU7a0NBQ2EsaUJBQVU7a0VBTzlCO0lBVFUsZ0JBQWdCO1FBRDVCLGlCQUFVLEVBQUU7eUNBWWtCLGlCQUFPLEVBQWdCLGlCQUFVLEVBQWdCLDBCQUFXO09BWDlFLGdCQUFnQixDQWE1QjtJQUFELHVCQUFDO0NBQUEsQUFiRCxJQWFDO0FBYlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBFZmZlY3QsIEFjdGlvbnMgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi9kYXNoYm9hcmQuYWN0aW9ucyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICd+L2FwcC9hdXRoLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkRWZmZWN0cyB7XG5cdEBFZmZlY3QoKVxuXHRmZXRjaERhc2hib2FyZEl0ZW1zJDogT2JzZXJ2YWJsZTxBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJFxuXHRcdC5vZlR5cGUoYWN0aW9ucy5GRVRDSF9EQVNIQk9BUkRfSVRFTVMpXG5cdFx0LnBpcGUoXG5cdFx0XHRzd2l0Y2hNYXAoXyA9PiB0aGlzLmF1dGguZ2V0QWNjZXNzVG9rZW4oJycpXG5cdFx0XHRcdC5waXBlKFxuXHRcdFx0XHRcdG1hcChfID0+IG5ldyBhY3Rpb25zLlNldERhc2hib2FyZEl0ZW1zKCkpXG5cdFx0XHRcdCkpXG5cdFx0KVxuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBhdXRoOiBBdXRoU2VydmljZSkge1xuXHR9XG59ICJdfQ==