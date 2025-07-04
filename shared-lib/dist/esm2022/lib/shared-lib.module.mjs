import { NgModule } from '@angular/core';
import { SharedLibComponent } from './shared-lib.component';
import { OtherComponent } from './other/other.component';
import { AuthLibModule } from 'auth-lib';
import { SharedLibService } from './shared-lib.service';
import * as i0 from "@angular/core";
export class SharedLibModule {
    static forRoot() {
        return {
            ngModule: SharedLibModule,
            providers: [SharedLibService]
        };
    }
    static ɵfac = function SharedLibModule_Factory(t) { return new (t || SharedLibModule)(); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: SharedLibModule });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [AuthLibModule] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SharedLibModule, [{
        type: NgModule,
        args: [{
                declarations: [SharedLibComponent, OtherComponent],
                imports: [
                    AuthLibModule
                ],
                exports: [SharedLibComponent, OtherComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SharedLibModule, { declarations: [SharedLibComponent, OtherComponent], imports: [AuthLibModule], exports: [SharedLibComponent, OtherComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL3NoYXJlZC1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQVV4RCxNQUFNLE9BQU8sZUFBZTtJQUMxQixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsZUFBZTtZQUN6QixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztTQUM5QixDQUFDO0lBQ0osQ0FBQzt5RUFOVSxlQUFlOzREQUFmLGVBQWU7Z0VBSnhCLGFBQWE7O2lGQUlKLGVBQWU7Y0FQM0IsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGtCQUFrQixFQUFFLGNBQWMsQ0FBQztnQkFDbEQsT0FBTyxFQUFFO29CQUNQLGFBQWE7aUJBQ2Q7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsY0FBYyxDQUFDO2FBQzlDOzt3RkFDWSxlQUFlLG1CQU5YLGtCQUFrQixFQUFFLGNBQWMsYUFFL0MsYUFBYSxhQUVMLGtCQUFrQixFQUFFLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTaGFyZWRMaWJDb21wb25lbnQgfSBmcm9tICcuL3NoYXJlZC1saWIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgT3RoZXJDb21wb25lbnQgfSBmcm9tICcuL290aGVyL290aGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEF1dGhMaWJNb2R1bGUgfSBmcm9tICdhdXRoLWxpYic7XHJcbmltcG9ydCB7IFNoYXJlZExpYlNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC1saWIuc2VydmljZSc7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtTaGFyZWRMaWJDb21wb25lbnQsIE90aGVyQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBBdXRoTGliTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbU2hhcmVkTGliQ29tcG9uZW50LCBPdGhlckNvbXBvbmVudF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaGFyZWRMaWJNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8U2hhcmVkTGliTW9kdWxlPiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogU2hhcmVkTGliTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtTaGFyZWRMaWJTZXJ2aWNlXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19