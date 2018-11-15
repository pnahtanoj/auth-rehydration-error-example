"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AUTHENTICATE = '[AUTHENTICATION] Authenticate';
exports.AUTHENTICATION_SUCCESS = '[AUTHENTICATION] Authentication Success';
exports.AUTHENTICATION_CLEAR = '[AUTHENTICATION] Authentication Clear';
exports.LOGOUT = '[AUTHENTICATION] Logout';
var Authenticate = /** @class */ (function () {
    function Authenticate(payload) {
        this.payload = payload;
        this.type = exports.AUTHENTICATE;
    }
    return Authenticate;
}());
exports.Authenticate = Authenticate;
var AuthenticationSuccess = /** @class */ (function () {
    function AuthenticationSuccess(payload) {
        this.payload = payload;
        this.type = exports.AUTHENTICATION_SUCCESS;
    }
    return AuthenticationSuccess;
}());
exports.AuthenticationSuccess = AuthenticationSuccess;
var AuthenticationClear = /** @class */ (function () {
    function AuthenticationClear() {
        this.type = exports.AUTHENTICATION_CLEAR;
    }
    return AuthenticationClear;
}());
exports.AuthenticationClear = AuthenticationClear;
var Logout = /** @class */ (function () {
    function Logout() {
        this.type = exports.LOGOUT;
    }
    return Logout;
}());
exports.Logout = Logout;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1dGhlbnRpY2F0aW9uLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJYSxRQUFBLFlBQVksR0FBRywrQkFBK0IsQ0FBQztBQUMvQyxRQUFBLHNCQUFzQixHQUFHLHlDQUF5QyxDQUFDO0FBQ25FLFFBQUEsb0JBQW9CLEdBQUcsdUNBQXVDLENBQUM7QUFFL0QsUUFBQSxNQUFNLEdBQUcseUJBQXlCLENBQUM7QUFFaEQ7SUFHRSxzQkFBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFGekIsU0FBSSxHQUFHLG9CQUFZLENBQUM7SUFHN0IsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7QUFMWSxvQ0FBWTtBQU96QjtJQUdFLCtCQUFtQixPQUE0QjtRQUE1QixZQUFPLEdBQVAsT0FBTyxDQUFxQjtRQUZ0QyxTQUFJLEdBQUcsOEJBQXNCLENBQUM7SUFHdkMsQ0FBQztJQUNILDRCQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7QUFMWSxzREFBcUI7QUFPbEM7SUFBQTtRQUNXLFNBQUksR0FBRyw0QkFBb0IsQ0FBQztJQUN2QyxDQUFDO0lBQUQsMEJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUZZLGtEQUFtQjtBQUloQztJQUFBO1FBQ1csU0FBSSxHQUFHLGNBQU0sQ0FBQztJQUN6QixDQUFDO0lBQUQsYUFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRlksd0JBQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtY2xhc3Nlcy1wZXItZmlsZSAqL1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25SZXBseSB9IGZyb20gJy4uL2F1dGgvQXV0aGVudGljYXRpb25SZXBseSc7XG5cbmV4cG9ydCBjb25zdCBBVVRIRU5USUNBVEUgPSAnW0FVVEhFTlRJQ0FUSU9OXSBBdXRoZW50aWNhdGUnO1xuZXhwb3J0IGNvbnN0IEFVVEhFTlRJQ0FUSU9OX1NVQ0NFU1MgPSAnW0FVVEhFTlRJQ0FUSU9OXSBBdXRoZW50aWNhdGlvbiBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBBVVRIRU5USUNBVElPTl9DTEVBUiA9ICdbQVVUSEVOVElDQVRJT05dIEF1dGhlbnRpY2F0aW9uIENsZWFyJztcblxuZXhwb3J0IGNvbnN0IExPR09VVCA9ICdbQVVUSEVOVElDQVRJT05dIExvZ291dCc7XG5cbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGUgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQVVUSEVOVElDQVRFO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25TdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEFVVEhFTlRJQ0FUSU9OX1NVQ0NFU1M7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEF1dGhlbnRpY2F0aW9uUmVwbHkpIHtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25DbGVhciBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBBVVRIRU5USUNBVElPTl9DTEVBUjtcbn1cblxuZXhwb3J0IGNsYXNzIExvZ291dCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0dPVVQ7XG59XG5cbmV4cG9ydCB0eXBlIEFjdGlvbnMgPVxuICB8IEF1dGhlbnRpY2F0ZVxuICB8IEF1dGhlbnRpY2F0aW9uU3VjY2Vzc1xuICB8IEF1dGhlbnRpY2F0aW9uQ2xlYXJcbiAgfCBMb2dvdXRcbiAgOyJdfQ==