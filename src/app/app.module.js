"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var common_1 = require("nativescript-angular/common");
var http_1 = require("nativescript-angular/http");
var http_2 = require("@angular/common/http");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var item_service_1 = require("./item/item.service");
var items_component_1 = require("./item/items.component");
var item_detail_component_1 = require("./item/item-detail.component");
var store_1 = require("@ngrx/store");
var fromAuth = require("./store/authentication.reducer");
var auth_service_1 = require("./auth.service");
var ngrx_store_localstorage_1 = require("ngrx-store-localstorage");
var auth_validator_1 = require("./auth.validator");
var effects_1 = require("@ngrx/effects");
var authentication_effects_1 = require("./store/authentication.effects");
var auth_interceptor_1 = require("./auth/auth.interceptor");
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
var localStorage = require("nativescript-localstorage");
var localStorageSyncConfig = {
    keys: ['authentication'],
    rehydrate: true
};
function localStorageSyncReducer(reducer) {
    return ngrx_store_localstorage_1.localStorageSync(localStorageSyncConfig)(reducer);
}
exports.localStorageSyncReducer = localStorageSyncReducer;
var metaReducers = [localStorageSyncReducer];
var appReducers = {
    authentication: fromAuth.reducer,
};
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                common_1.NativeScriptCommonModule,
                http_1.NativeScriptHttpModule,
                http_2.HttpClientModule,
                app_routing_module_1.AppRoutingModule,
                store_1.StoreModule.forRoot(appReducers, { metaReducers: metaReducers }),
                effects_1.EffectsModule.forRoot([authentication_effects_1.AuthenticationEffects])
            ],
            declarations: [
                app_component_1.AppComponent,
                items_component_1.ItemsComponent,
                item_detail_component_1.ItemDetailComponent
            ],
            providers: [
                item_service_1.ItemService,
                auth_service_1.AuthService,
                auth_validator_1.AuthValidator,
                {
                    provide: http_2.HTTP_INTERCEPTORS,
                    useClass: auth_interceptor_1.AuthInterceptor,
                    multi: true
                }
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLHNEQUF1RTtBQUN2RSxrREFBbUU7QUFDbkUsNkNBQTJFO0FBRTNFLDJEQUF3RDtBQUN4RCxpREFBK0M7QUFDL0Msb0RBQWtEO0FBQ2xELDBEQUF3RDtBQUN4RCxzRUFBbUU7QUFDbkUscUNBQXNFO0FBQ3RFLHlEQUEyRDtBQUMzRCwrQ0FBNkM7QUFDN0MsbUVBQTJEO0FBQzNELG1EQUFpRDtBQUNqRCx5Q0FBOEM7QUFDOUMseUVBQXVFO0FBQ3ZFLDREQUEwRDtBQUUxRCwyRUFBMkU7QUFDM0Usd0VBQXdFO0FBRXhFLGtGQUFrRjtBQUNsRixtRkFBbUY7QUFFbkYsSUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLDJCQUEyQixDQUFDLENBQUM7QUFFMUQsSUFBTSxzQkFBc0IsR0FBRztJQUM5QixJQUFJLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztJQUN4QixTQUFTLEVBQUUsSUFBSTtDQUNmLENBQUM7QUFFRixpQ0FBd0MsT0FBMkI7SUFDbEUsTUFBTSxDQUFDLDBDQUFnQixDQUFDLHNCQUFzQixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDMUQsQ0FBQztBQUZELDBEQUVDO0FBQ0QsSUFBTSxZQUFZLEdBQWlDLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUU3RSxJQUFNLFdBQVcsR0FBRztJQUNuQixjQUFjLEVBQUUsUUFBUSxDQUFDLE9BQU87Q0FDaEMsQ0FBQztBQXFDRjtJQUhBOztNQUVFO0lBQ0Y7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUFuQ3JCLGVBQVEsQ0FBQztZQUNULFNBQVMsRUFBRTtnQkFDViw0QkFBWTthQUNaO1lBQ0QsT0FBTyxFQUFFO2dCQUNSLHdDQUFrQjtnQkFDaEIsaUNBQXdCO2dCQUN4Qiw2QkFBc0I7Z0JBQ3RCLHVCQUFnQjtnQkFDbEIscUNBQWdCO2dCQUNoQixtQkFBVyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxZQUFZLGNBQUEsRUFBRSxDQUFDO2dCQUNsRCx1QkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLDhDQUFxQixDQUFDLENBQUM7YUFDOUM7WUFDRCxZQUFZLEVBQUU7Z0JBQ2IsNEJBQVk7Z0JBQ1osZ0NBQWM7Z0JBQ2QsMkNBQW1CO2FBQ25CO1lBQ0QsU0FBUyxFQUFFO2dCQUNWLDBCQUFXO2dCQUNYLDBCQUFXO2dCQUNYLDhCQUFhO2dCQUNiO29CQUNJLE9BQU8sRUFBRSx3QkFBaUI7b0JBQzFCLFFBQVEsRUFBRSxrQ0FBZTtvQkFDekIsS0FBSyxFQUFFLElBQUk7aUJBQ1o7YUFDSDtZQUNELE9BQU8sRUFBRTtnQkFDUix1QkFBZ0I7YUFDaEI7U0FDRCxDQUFDO1FBQ0Y7O1VBRUU7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBIVFRQX0lOVEVSQ0VQVE9SUywgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtL2l0ZW0uc2VydmljZVwiO1xuaW1wb3J0IHsgSXRlbXNDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW1zLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSXRlbURldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbS1kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTdG9yZU1vZHVsZSwgQWN0aW9uUmVkdWNlciwgTWV0YVJlZHVjZXIgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcbmltcG9ydCAqIGFzIGZyb21BdXRoIGZyb20gJy4vc3RvcmUvYXV0aGVudGljYXRpb24ucmVkdWNlcic7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCIuL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHsgbG9jYWxTdG9yYWdlU3luYyB9IGZyb20gJ25ncngtc3RvcmUtbG9jYWxzdG9yYWdlJztcbmltcG9ydCB7IEF1dGhWYWxpZGF0b3IgfSBmcm9tIFwiLi9hdXRoLnZhbGlkYXRvclwiO1xuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbkVmZmVjdHMgfSBmcm9tIFwiLi9zdG9yZS9hdXRoZW50aWNhdGlvbi5lZmZlY3RzXCI7XG5pbXBvcnQgeyBBdXRoSW50ZXJjZXB0b3IgfSBmcm9tIFwiLi9hdXRoL2F1dGguaW50ZXJjZXB0b3JcIjtcblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdHdvLXdheSBiaW5kaW5nXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0aGUgSHR0cENsaWVudCB3cmFwcGVyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50XCI7XG5cbmNvbnN0IGxvY2FsU3RvcmFnZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtbG9jYWxzdG9yYWdlXCIpO1xuXG5jb25zdCBsb2NhbFN0b3JhZ2VTeW5jQ29uZmlnID0ge1xuXHRrZXlzOiBbJ2F1dGhlbnRpY2F0aW9uJ10sXG5cdHJlaHlkcmF0ZTogdHJ1ZVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGxvY2FsU3RvcmFnZVN5bmNSZWR1Y2VyKHJlZHVjZXI6IEFjdGlvblJlZHVjZXI8YW55Pik6IEFjdGlvblJlZHVjZXI8YW55PiB7XG5cdHJldHVybiBsb2NhbFN0b3JhZ2VTeW5jKGxvY2FsU3RvcmFnZVN5bmNDb25maWcpKHJlZHVjZXIpO1xufVxuY29uc3QgbWV0YVJlZHVjZXJzOiBBcnJheTxNZXRhUmVkdWNlcjxhbnksIGFueT4+ID0gW2xvY2FsU3RvcmFnZVN5bmNSZWR1Y2VyXTtcblxuY29uc3QgYXBwUmVkdWNlcnMgPSB7XG5cdGF1dGhlbnRpY2F0aW9uOiBmcm9tQXV0aC5yZWR1Y2VyLFxufTtcblxuQE5nTW9kdWxlKHtcblx0Ym9vdHN0cmFwOiBbXG5cdFx0QXBwQ29tcG9uZW50XG5cdF0sXG5cdGltcG9ydHM6IFtcblx0XHROYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcblx0XHRBcHBSb3V0aW5nTW9kdWxlLFxuXHRcdFN0b3JlTW9kdWxlLmZvclJvb3QoYXBwUmVkdWNlcnMsIHsgbWV0YVJlZHVjZXJzIH0pLFxuXHRcdEVmZmVjdHNNb2R1bGUuZm9yUm9vdChbQXV0aGVudGljYXRpb25FZmZlY3RzXSlcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0QXBwQ29tcG9uZW50LFxuXHRcdEl0ZW1zQ29tcG9uZW50LFxuXHRcdEl0ZW1EZXRhaWxDb21wb25lbnRcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0SXRlbVNlcnZpY2UsXG5cdFx0QXV0aFNlcnZpY2UsXG5cdFx0QXV0aFZhbGlkYXRvcixcblx0XHR7XG4gICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICAgIHVzZUNsYXNzOiBBdXRoSW50ZXJjZXB0b3IsXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cblx0XSxcblx0c2NoZW1hczogW1xuXHRcdE5PX0VSUk9SU19TQ0hFTUFcblx0XVxufSlcbi8qXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXG4qL1xuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==