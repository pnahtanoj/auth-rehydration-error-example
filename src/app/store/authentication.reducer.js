"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actions = require("./authentication.actions");
var AuthenticationState = /** @class */ (function () {
    function AuthenticationState() {
    }
    return AuthenticationState;
}());
exports.AuthenticationState = AuthenticationState;
exports.State = {
    token: '',
    bearerToken: '',
    refreshToken: '',
    bearerExpiration: 0
};
function reducer(state, action) {
    if (state === void 0) { state = exports.State; }
    console.log('ACTION: ', action.type);
    switch (action.type) {
        case actions.AUTHENTICATION_SUCCESS:
            var curDate = Date.now() / 1000;
            var data = action.payload.data;
            // const expiration = 5 + curDate;
            var expiration = parseInt(data.expires_in) + curDate;
            return Object.assign({}, state, {
                bearerToken: data.access_token,
                refreshToken: data.refresh_token,
                bearerExpiration: expiration
            });
        case actions.AUTHENTICATION_CLEAR:
            return Object.assign({}, state, {
                token: exports.State.token,
                bearerToken: exports.State.bearerToken,
                refreshToken: exports.State.refreshToken,
                bearerExpiration: exports.State.bearerExpiration
            });
        default:
            return state;
    }
}
exports.reducer = reducer;
exports.getAuthentication = function (state) { return state; };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24ucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1dGhlbnRpY2F0aW9uLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrREFBb0Q7QUFFcEQ7SUFBQTtJQUtBLENBQUM7SUFBRCwwQkFBQztBQUFELENBQUMsQUFMRCxJQUtDO0FBTFksa0RBQW1CO0FBT25CLFFBQUEsS0FBSyxHQUF3QjtJQUN6QyxLQUFLLEVBQUUsRUFBRTtJQUNULFdBQVcsRUFBRSxFQUFFO0lBQ2YsWUFBWSxFQUFFLEVBQUU7SUFDaEIsZ0JBQWdCLEVBQUUsQ0FBQztDQUNuQixDQUFDO0FBRUYsaUJBQXdCLEtBQWtDLEVBQUUsTUFBdUI7SUFBM0Qsc0JBQUEsRUFBQSxRQUE2QixhQUFLO0lBQ3pELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVyQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNyQixLQUFLLE9BQU8sQ0FBQyxzQkFBc0I7WUFDbEMsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztZQUNsQyxJQUFNLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztZQUNqQyxrQ0FBa0M7WUFDbEMsSUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxPQUFPLENBQUM7WUFFdkQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFDN0I7Z0JBQ0MsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZO2dCQUM5QixZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWE7Z0JBQ2hDLGdCQUFnQixFQUFFLFVBQVU7YUFDNUIsQ0FBQyxDQUFBO1FBRUosS0FBSyxPQUFPLENBQUMsb0JBQW9CO1lBQ2hDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUU7Z0JBQy9CLEtBQUssRUFBRSxhQUFLLENBQUMsS0FBSztnQkFDbEIsV0FBVyxFQUFFLGFBQUssQ0FBQyxXQUFXO2dCQUM5QixZQUFZLEVBQUUsYUFBSyxDQUFDLFlBQVk7Z0JBQ2hDLGdCQUFnQixFQUFFLGFBQUssQ0FBQyxnQkFBZ0I7YUFDeEMsQ0FBQyxDQUFBO1FBQ0g7WUFDQyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQztBQUNGLENBQUM7QUEzQkQsMEJBMkJDO0FBRVksUUFBQSxpQkFBaUIsR0FBRyxVQUFDLEtBQTBCLElBQUssT0FBQSxLQUFLLEVBQUwsQ0FBSyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuL2F1dGhlbnRpY2F0aW9uLmFjdGlvbnMnO1xuXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25TdGF0ZSB7XG5cdHRva2VuOiBzdHJpbmc7IC8vIHVzZWQ/XG5cdGJlYXJlclRva2VuOiBzdHJpbmc7XG5cdHJlZnJlc2hUb2tlbjogc3RyaW5nO1xuXHRiZWFyZXJFeHBpcmF0aW9uOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBTdGF0ZTogQXV0aGVudGljYXRpb25TdGF0ZSA9IHtcblx0dG9rZW46ICcnLFxuXHRiZWFyZXJUb2tlbjogJycsXG5cdHJlZnJlc2hUb2tlbjogJycsXG5cdGJlYXJlckV4cGlyYXRpb246IDBcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlOiBBdXRoZW50aWNhdGlvblN0YXRlID0gU3RhdGUsIGFjdGlvbjogYWN0aW9ucy5BY3Rpb25zKSB7XG5cdGNvbnNvbGUubG9nKCdBQ1RJT046ICcsIGFjdGlvbi50eXBlKTtcblxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBhY3Rpb25zLkFVVEhFTlRJQ0FUSU9OX1NVQ0NFU1M6XG5cdFx0XHRjb25zdCBjdXJEYXRlID0gRGF0ZS5ub3coKSAvIDEwMDA7XG5cdFx0XHRjb25zdCBkYXRhID0gYWN0aW9uLnBheWxvYWQuZGF0YTtcblx0XHRcdC8vIGNvbnN0IGV4cGlyYXRpb24gPSA1ICsgY3VyRGF0ZTtcblx0XHRcdGNvbnN0IGV4cGlyYXRpb24gPSBwYXJzZUludChkYXRhLmV4cGlyZXNfaW4pICsgY3VyRGF0ZTtcblxuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0YmVhcmVyVG9rZW46IGRhdGEuYWNjZXNzX3Rva2VuLFxuXHRcdFx0XHRcdHJlZnJlc2hUb2tlbjogZGF0YS5yZWZyZXNoX3Rva2VuLFxuXHRcdFx0XHRcdGJlYXJlckV4cGlyYXRpb246IGV4cGlyYXRpb25cblx0XHRcdFx0fSlcblxuXHRcdGNhc2UgYWN0aW9ucy5BVVRIRU5USUNBVElPTl9DTEVBUjpcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuXHRcdFx0XHR0b2tlbjogU3RhdGUudG9rZW4sXG5cdFx0XHRcdGJlYXJlclRva2VuOiBTdGF0ZS5iZWFyZXJUb2tlbixcblx0XHRcdFx0cmVmcmVzaFRva2VuOiBTdGF0ZS5yZWZyZXNoVG9rZW4sXG5cdFx0XHRcdGJlYXJlckV4cGlyYXRpb246IFN0YXRlLmJlYXJlckV4cGlyYXRpb25cblx0XHRcdH0pXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0fVxufVxuXG5leHBvcnQgY29uc3QgZ2V0QXV0aGVudGljYXRpb24gPSAoc3RhdGU6IEF1dGhlbnRpY2F0aW9uU3RhdGUpID0+IHN0YXRlO1xuIl19