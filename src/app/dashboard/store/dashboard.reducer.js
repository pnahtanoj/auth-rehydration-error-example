"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actions = require("./dashboard.actions");
var DashboardState = /** @class */ (function () {
    function DashboardState() {
    }
    return DashboardState;
}());
exports.DashboardState = DashboardState;
exports.State = {
    items: []
};
function reducer(state, action) {
    if (state === void 0) { state = exports.State; }
    switch (action.type) {
        case actions.SET_DASHBOARD_ITEMS:
            return Object.assign({}, state, {
                items: [{ id: 1 }, { id: 2 }]
            });
        default:
            return state;
    }
}
exports.reducer = reducer;
exports.getDashboard = function (state) { return state; };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLnJlZHVjZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXNoYm9hcmQucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUErQztBQUUvQztJQUFBO0lBRUEsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFGWSx3Q0FBYztBQUlkLFFBQUEsS0FBSyxHQUFtQjtJQUNwQyxLQUFLLEVBQUUsRUFBRTtDQUNULENBQUM7QUFFRixpQkFBd0IsS0FBNkIsRUFBRSxNQUF1QjtJQUF0RCxzQkFBQSxFQUFBLFFBQXdCLGFBQUs7SUFDcEQsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDckIsS0FBSyxPQUFPLENBQUMsbUJBQW1CO1lBQy9CLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQzdCO2dCQUNDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDO2FBQzdCLENBQUMsQ0FBQTtRQUVKO1lBQ0MsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7QUFDRixDQUFDO0FBWEQsMEJBV0M7QUFFWSxRQUFBLFlBQVksR0FBRyxVQUFDLEtBQXFCLElBQUssT0FBQSxLQUFLLEVBQUwsQ0FBSyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuL2Rhc2hib2FyZC5hY3Rpb25zJztcblxuZXhwb3J0IGNsYXNzIERhc2hib2FyZFN0YXRlIHtcblx0aXRlbXM6IGFueVtdXG59XG5cbmV4cG9ydCBjb25zdCBTdGF0ZTogRGFzaGJvYXJkU3RhdGUgPSB7XG5cdGl0ZW1zOiBbXVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGU6IERhc2hib2FyZFN0YXRlID0gU3RhdGUsIGFjdGlvbjogYWN0aW9ucy5BY3Rpb25zKSB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIGFjdGlvbnMuU0VUX0RBU0hCT0FSRF9JVEVNUzpcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGl0ZW1zOiBbeyBpZDogMSB9LCB7IGlkOiAyIH1dXG5cdFx0XHRcdH0pXG5cblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59XG5cbmV4cG9ydCBjb25zdCBnZXREYXNoYm9hcmQgPSAoc3RhdGU6IERhc2hib2FyZFN0YXRlKSA9PiBzdGF0ZTtcbiJdfQ==