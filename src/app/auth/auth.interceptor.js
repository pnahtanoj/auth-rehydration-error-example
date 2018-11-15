"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var auth_service_1 = require("../auth.service");
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(auth) {
        this.auth = auth;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        // return next.handle(req);
        return this.auth.getAuthToken().pipe(operators_1.switchMap(function (_) { return next.handle(req); }));
    };
    AuthInterceptor = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], AuthInterceptor);
    return AuthInterceptor;
}());
exports.AuthInterceptor = AuthInterceptor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1dGguaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFLM0MsNENBQXFEO0FBQ3JELGdEQUE4QztBQUc5QztJQUNDLHlCQUFvQixJQUFpQjtRQUFqQixTQUFJLEdBQUosSUFBSSxDQUFhO0lBQ3JDLENBQUM7SUFFRCxtQ0FBUyxHQUFULFVBQVUsR0FBcUIsRUFBRSxJQUFpQjtRQUNqRCwyQkFBMkI7UUFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLHFCQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFoQixDQUFnQixDQUFDLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBUFcsZUFBZTtRQUQzQixpQkFBVSxFQUFFO3lDQUVjLDBCQUFXO09BRHpCLGVBQWUsQ0FRM0I7SUFBRCxzQkFBQztDQUFBLEFBUkQsSUFRQztBQVJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcblx0SHR0cEludGVyY2VwdG9yLCBIdHRwSGFuZGxlciwgSHR0cFJlcXVlc3Rcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWVyZ2VNYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aDogQXV0aFNlcnZpY2UpIHtcblx0fVxuXG5cdGludGVyY2VwdChyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKSB7XG5cdFx0Ly8gcmV0dXJuIG5leHQuaGFuZGxlKHJlcSk7XG5cdFx0cmV0dXJuIHRoaXMuYXV0aC5nZXRBdXRoVG9rZW4oKS5waXBlKHN3aXRjaE1hcChfID0+IG5leHQuaGFuZGxlKHJlcSkpKTtcblx0fVxufSJdfQ==