"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var store_2 = require("./store");
var authentication_actions_1 = require("./store/authentication.actions");
var router_1 = require("nativescript-angular/router");
var http_1 = require("@angular/common/http");
var AuthenticationStatus;
(function (AuthenticationStatus) {
    AuthenticationStatus[AuthenticationStatus["AUTHENTICATED"] = 0] = "AUTHENTICATED";
    AuthenticationStatus[AuthenticationStatus["REFRESH_TOKEN"] = 1] = "REFRESH_TOKEN";
    AuthenticationStatus[AuthenticationStatus["INVALID"] = 2] = "INVALID";
})(AuthenticationStatus = exports.AuthenticationStatus || (exports.AuthenticationStatus = {}));
var AuthService = /** @class */ (function () {
    function AuthService(store, router, http) {
        this.store = store;
        this.router = router;
        this.http = http;
        console.log('AUTH SERVICE INITIALIZING!');
        this.store.select(store_2.getAuthentication)
            .pipe(operators_1.tap(function (auth) { return console.log('AUTH SUB TRIGGERED (AUTH SERVICE)'); }))
            .subscribe();
    }
    AuthService.prototype.validateAuthentication = function (data) {
        var _this = this;
        var currentAuthentication = this.isAuthenticated(data);
        switch (currentAuthentication) {
            case AuthenticationStatus.REFRESH_TOKEN:
                console.log('AUTH SERVICE VALIDATE --- REFRESH');
                return this.refreshAccessToken(data.refreshToken)
                    .pipe(operators_1.tap(function (data) { return _this.store.dispatch(new authentication_actions_1.AuthenticationSuccess(data)); }), operators_1.map(function () { return true; }));
            case AuthenticationStatus.AUTHENTICATED:
                // console.log('CAN ACTIVATE --- AUTHENTICATED');
                return rxjs_1.of(true);
            case AuthenticationStatus.INVALID:
                console.log('CAN ACTIVATE --- INVALID');
                this.router.navigate(['login'], { clearHistory: true }); // might not want this here...
                return rxjs_1.of(false);
            default:
                console.log('AUTH SERVICE VALIDATE --- DEFAULT');
                return rxjs_1.of(false);
        }
    };
    AuthService.prototype.isAuthenticated = function (data) {
        var currentDate = Date.now() / 1000;
        if (data.bearerToken && data.bearerExpiration && data.refreshToken) {
            if (currentDate < data.bearerExpiration) {
                return AuthenticationStatus.AUTHENTICATED;
            }
            else if (currentDate >= data.bearerExpiration) {
                return AuthenticationStatus.REFRESH_TOKEN;
            }
        }
        return AuthenticationStatus.INVALID;
    };
    AuthService.prototype.getAuthToken = function () {
        var _this = this;
        // console.log('GETTING AUTH TOKEN');
        return this.store.pipe(store_1.select(store_2.getAuthentication), operators_1.switchMap(function (auth) { return _this.validateAuthentication(auth); }), operators_1.flatMap(function () {
            return _this.store.select(store_2.getAuthentication);
        }));
    };
    AuthService.prototype.getAccessToken = function (_code) {
        return this.http.get('https://jsonplaceholder.typicode.com/todos/1')
            .pipe(operators_1.map(function (google) { return ({
            data: {
                access_token: 'slkjdfoiuwoeiurlsldjflsj======123',
                token_type: 'token',
                expires_in: '3600',
                refresh_token: 'adfsaREFRESHTOKENkjlsjsd-------123'
            }
        }); }));
    };
    AuthService.prototype.refreshAccessToken = function (token) {
        return this.getAccessToken(token);
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [store_1.Store,
            router_1.RouterExtensions,
            http_1.HttpClient])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLHFDQUE0QztBQUM1Qyw2QkFBc0M7QUFDdEMsNENBQThEO0FBQzlELGlDQUE4RDtBQUc5RCx5RUFBdUU7QUFDdkUsc0RBQStEO0FBQy9ELDZDQUFrRDtBQUVsRCxJQUFZLG9CQUlYO0FBSkQsV0FBWSxvQkFBb0I7SUFDL0IsaUZBQWEsQ0FBQTtJQUNiLGlGQUFhLENBQUE7SUFDYixxRUFBTyxDQUFBO0FBQ1IsQ0FBQyxFQUpXLG9CQUFvQixHQUFwQiw0QkFBb0IsS0FBcEIsNEJBQW9CLFFBSS9CO0FBR0Q7SUFDQyxxQkFDUyxLQUE4QixFQUM5QixNQUF3QixFQUN4QixJQUFnQjtRQUZoQixVQUFLLEdBQUwsS0FBSyxDQUF5QjtRQUM5QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUN4QixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRXhCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyx5QkFBaUIsQ0FBQzthQUNsQyxJQUFJLENBQ0osZUFBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxFQUFoRCxDQUFnRCxDQUFDLENBQzdEO2FBQ0EsU0FBUyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRUQsNENBQXNCLEdBQXRCLFVBQXVCLElBQXdCO1FBQS9DLGlCQTRCQztRQTNCQSxJQUFNLHFCQUFxQixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFekQsTUFBTSxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1lBQy9CLEtBQUssb0JBQW9CLENBQUMsYUFBYTtnQkFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FB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Q0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBdEZXLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FHSSxhQUFLO1lBQ0oseUJBQWdCO1lBQ2xCLGlCQUFVO09BSmIsV0FBVyxDQXVGdkI7SUFBRCxrQkFBQztDQUFBLEFBdkZELElBdUZDO0FBdkZZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBTdG9yZSwgc2VsZWN0IH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YXAsIHN3aXRjaE1hcCwgZmxhdE1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSwgZ2V0QXV0aGVudGljYXRpb24gfSBmcm9tIFwiLi9zdG9yZVwiO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25EYXRhIH0gZnJvbSBcIi4vYXV0aC9BdXRoZW50aWNhdGlvbkRhdGFcIjtcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uUmVwbHkgfSBmcm9tIFwiLi9hdXRoL0F1dGhlbnRpY2F0aW9uUmVwbHlcIjtcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU3VjY2VzcyB9IGZyb20gXCIuL3N0b3JlL2F1dGhlbnRpY2F0aW9uLmFjdGlvbnNcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5cbmV4cG9ydCBlbnVtIEF1dGhlbnRpY2F0aW9uU3RhdHVzIHtcblx0QVVUSEVOVElDQVRFRCxcblx0UkVGUkVTSF9UT0tFTixcblx0SU5WQUxJRFxufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBsaWNhdGlvblN0YXRlPixcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcblx0XHRwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcblxuXHRcdGNvbnNvbGUubG9nKCdBVVRIIFNFUlZJQ0UgSU5JVElBTElaSU5HIScpO1xuXHRcdHRoaXMuc3RvcmUuc2VsZWN0KGdldEF1dGhlbnRpY2F0aW9uKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRhcChhdXRoID0+IGNvbnNvbGUubG9nKCdBVVRIIFNVQiBUUklHR0VSRUQgKEFVVEggU0VSVklDRSknKSlcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKTtcblx0fVxuXG5cdHZhbGlkYXRlQXV0aGVudGljYXRpb24oZGF0YTogQXV0aGVudGljYXRpb25EYXRhKSB7XG5cdFx0Y29uc3QgY3VycmVudEF1dGhlbnRpY2F0aW9uID0gdGhpcy5pc0F1dGhlbnRpY2F0ZWQoZGF0YSk7XG5cblx0XHRzd2l0Y2ggKGN1cnJlbnRBdXRoZW50aWNhdGlvbikge1xuXHRcdFx0Y2FzZSBBdXRoZW50aWNhdGlvblN0YXR1cy5SRUZSRVNIX1RPS0VOOlxuXHRcdFx0XHRjb25zb2xlLmxvZygnQVVUSCBTRVJWSUNFIFZBTElEQVRFIC0tLSBSRUZSRVNIJyk7XG5cblx0XHRcdFx0cmV0dXJuIHRoaXMucmVmcmVzaEFjY2Vzc1Rva2VuKGRhdGEucmVmcmVzaFRva2VuKVxuXHRcdFx0XHRcdC5waXBlKFxuXHRcdFx0XHRcdFx0dGFwKChkYXRhOiBBdXRoZW50aWNhdGlvblJlcGx5KSA9PiB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBBdXRoZW50aWNhdGlvblN1Y2Nlc3MoZGF0YSkpKSxcblx0XHRcdFx0XHRcdG1hcCgoKSA9PiB0cnVlKVxuXHRcdFx0XHRcdCk7XG5cblx0XHRcdGNhc2UgQXV0aGVudGljYXRpb25TdGF0dXMuQVVUSEVOVElDQVRFRDpcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ0NBTiBBQ1RJVkFURSAtLS0gQVVUSEVOVElDQVRFRCcpO1xuXHRcdFx0XHRyZXR1cm4gb2YodHJ1ZSk7XG5cblx0XHRcdGNhc2UgQXV0aGVudGljYXRpb25TdGF0dXMuSU5WQUxJRDpcblx0XHRcdFx0Y29uc29sZS5sb2coJ0NBTiBBQ1RJVkFURSAtLS0gSU5WQUxJRCcpO1xuXHRcdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2xvZ2luJ10sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pOyAvLyBtaWdodCBub3Qgd2FudCB0aGlzIGhlcmUuLi5cblxuXHRcdFx0XHRyZXR1cm4gb2YoZmFsc2UpO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRjb25zb2xlLmxvZygnQVVUSCBTRVJWSUNFIFZBTElEQVRFIC0tLSBERUZBVUxUJyk7XG5cblx0XHRcdFx0cmV0dXJuIG9mKGZhbHNlKTtcblx0XHR9XG5cdH1cblxuXHRpc0F1dGhlbnRpY2F0ZWQoZGF0YTogQXV0aGVudGljYXRpb25EYXRhKSB7XG5cdFx0Y29uc3QgY3VycmVudERhdGUgPSBEYXRlLm5vdygpIC8gMTAwMDtcblxuXHRcdGlmIChkYXRhLmJlYXJlclRva2VuICYmIGRhdGEuYmVhcmVyRXhwaXJhdGlvbiAmJiBkYXRhLnJlZnJlc2hUb2tlbikge1xuXHRcdFx0aWYgKGN1cnJlbnREYXRlIDwgZGF0YS5iZWFyZXJFeHBpcmF0aW9uKSB7XG5cdFx0XHRcdHJldHVybiBBdXRoZW50aWNhdGlvblN0YXR1cy5BVVRIRU5USUNBVEVEO1xuXHRcdFx0fSBlbHNlIGlmIChjdXJyZW50RGF0ZSA+PSBkYXRhLmJlYXJlckV4cGlyYXRpb24pIHtcblx0XHRcdFx0cmV0dXJuIEF1dGhlbnRpY2F0aW9uU3RhdHVzLlJFRlJFU0hfVE9LRU47XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIEF1dGhlbnRpY2F0aW9uU3RhdHVzLklOVkFMSUQ7XG5cdH1cblxuXHRnZXRBdXRoVG9rZW4oKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHQvLyBjb25zb2xlLmxvZygnR0VUVElORyBBVVRIIFRPS0VOJyk7XG5cdFx0cmV0dXJuIHRoaXMuc3RvcmUucGlwZShcblx0XHRcdHNlbGVjdChnZXRBdXRoZW50aWNhdGlvbiksXG5cdFx0XHRzd2l0Y2hNYXAoKGF1dGg6IEF1dGhlbnRpY2F0aW9uRGF0YSkgPT4gdGhpcy52YWxpZGF0ZUF1dGhlbnRpY2F0aW9uKGF1dGgpKSxcblx0XHRcdGZsYXRNYXAoKCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0QXV0aGVudGljYXRpb24pXG5cdFx0XHR9KVxuXHRcdClcblx0fVxuXG5cdGdldEFjY2Vzc1Rva2VuKF9jb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEF1dGhlbnRpY2F0aW9uUmVwbHk+IHtcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3RvZG9zLzEnKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdG1hcChnb29nbGUgPT4gKHtcblx0XHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0XHRhY2Nlc3NfdG9rZW46ICdzbGtqZGZvaXV3b2VpdXJsc2xkamZsc2o9PT09PT0xMjMnLFxuXHRcdFx0XHRcdFx0dG9rZW5fdHlwZTogJ3Rva2VuJyxcblx0XHRcdFx0XHRcdGV4cGlyZXNfaW46ICczNjAwJyxcblx0XHRcdFx0XHRcdHJlZnJlc2hfdG9rZW46ICdhZGZzYVJFRlJFU0hUT0tFTmtqbHNqc2QtLS0tLS0tMTIzJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSkpLFxuXHRcdFx0XHQvLyB0YXAoXyA9PiBjb25zb2xlLmxvZygnUkVNT1RFIENBTEwgSEFQUEVORUQhJykpXG5cdFx0XHQpO1xuXHR9XG5cblx0cmVmcmVzaEFjY2Vzc1Rva2VuKHRva2VuOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEF1dGhlbnRpY2F0aW9uUmVwbHk+IHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBY2Nlc3NUb2tlbih0b2tlbik7XG5cdH1cbn1cbiJdfQ==