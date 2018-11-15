"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actions = require("./submodule-one.actions");
var SubmoduleOneState = /** @class */ (function () {
    function SubmoduleOneState() {
    }
    return SubmoduleOneState;
}());
exports.SubmoduleOneState = SubmoduleOneState;
exports.State = {
    items: []
};
function reducer(state, action) {
    if (state === void 0) { state = exports.State; }
    switch (action.type) {
        case actions.SET_SUBMODULE_1111111_ITEMS:
            return Object.assign({}, state, {
                items: [{ id: 1111 }, { id: 1112 }]
            });
        default:
            return state;
    }
}
exports.reducer = reducer;
exports.getSubmoduleOne = function (state) { return state; };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibW9kdWxlLW9uZS5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3VibW9kdWxlLW9uZS5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQW1EO0FBRW5EO0lBQUE7SUFFQSxDQUFDO0lBQUQsd0JBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUZZLDhDQUFpQjtBQUlqQixRQUFBLEtBQUssR0FBc0I7SUFDdkMsS0FBSyxFQUFFLEVBQUU7Q0FDVCxDQUFDO0FBRUYsaUJBQXdCLEtBQWdDLEVBQUUsTUFBdUI7SUFBekQsc0JBQUEsRUFBQSxRQUEyQixhQUFLO0lBRXZELE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLEtBQUssT0FBTyxDQUFDLDJCQUEyQjtZQUN2QyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUM3QjtnQkFDQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQzthQUNuQyxDQUFDLENBQUE7UUFFSjtZQUNDLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0FBQ0YsQ0FBQztBQVpELDBCQVlDO0FBRVksUUFBQSxlQUFlLEdBQUcsVUFBQyxLQUF3QixJQUFLLE9BQUEsS0FBSyxFQUFMLENBQUssQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi9zdWJtb2R1bGUtb25lLmFjdGlvbnMnO1xuXG5leHBvcnQgY2xhc3MgU3VibW9kdWxlT25lU3RhdGUge1xuXHRpdGVtczogYW55W107XG59XG5cbmV4cG9ydCBjb25zdCBTdGF0ZTogU3VibW9kdWxlT25lU3RhdGUgPSB7XG5cdGl0ZW1zOiBbXVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGU6IFN1Ym1vZHVsZU9uZVN0YXRlID0gU3RhdGUsIGFjdGlvbjogYWN0aW9ucy5BY3Rpb25zKSB7XG5cblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgYWN0aW9ucy5TRVRfU1VCTU9EVUxFXzExMTExMTFfSVRFTVM6XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpdGVtczogW3sgaWQ6IDExMTEgfSwgeyBpZDogMTExMiB9XVxuXHRcdFx0XHR9KVxuXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0fVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3VibW9kdWxlT25lID0gKHN0YXRlOiBTdWJtb2R1bGVPbmVTdGF0ZSkgPT4gc3RhdGU7XG4iXX0=