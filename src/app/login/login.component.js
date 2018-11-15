"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var authentication_actions_1 = require("../store/authentication.actions");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(store) {
        this.store = store;
    }
    LoginComponent.prototype.login = function () {
        this.store.dispatch(new authentication_actions_1.Authenticate('AUTHENTICATE!'));
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'Login',
            moduleId: module.id,
            templateUrl: './login.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [store_1.Store])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1FO0FBQ25FLHFDQUFvQztBQUVwQywwRUFBK0Q7QUFRL0Q7SUFDQyx3QkFBb0IsS0FBOEI7UUFBOUIsVUFBSyxHQUFMLEtBQUssQ0FBeUI7SUFBSSxDQUFDO0lBRXZELDhCQUFLLEdBQUw7UUFDQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLHFDQUFZLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBTFcsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE9BQU87WUFDakIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07U0FDL0MsQ0FBQzt5Q0FFMEIsYUFBSztPQURwQixjQUFjLENBTTFCO0lBQUQscUJBQUM7Q0FBQSxBQU5ELElBTUM7QUFOWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9IGZyb20gJy4uL3N0b3JlJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0ZSB9IGZyb20gJy4uL3N0b3JlL2F1dGhlbnRpY2F0aW9uLmFjdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdMb2dpbicsXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwbGljYXRpb25TdGF0ZT4pIHsgfVxuXG5cdGxvZ2luKCkge1xuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEF1dGhlbnRpY2F0ZSgnQVVUSEVOVElDQVRFIScpKTtcblx0fVxufVxuIl19