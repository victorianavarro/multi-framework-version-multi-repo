import { NgModule } from '@angular/core';
import { SharedLibComponent } from './shared-lib.component';
import { OtherComponent } from './other/other.component';
import { AuthLibModule } from 'auth-lib';
import * as i0 from "@angular/core";
export class SharedLibModule {
    static ɵfac = function SharedLibModule_Factory(t) { return new (t || SharedLibModule)(); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: SharedLibModule });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [AuthLibModule] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SharedLibModule, [{
        type: NgModule,
        args: [{
                declarations: [SharedLibComponent, OtherComponent],
                imports: [
                    AuthLibModule,
                ],
                exports: [SharedLibComponent, OtherComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SharedLibModule, { declarations: [SharedLibComponent, OtherComponent], imports: [AuthLibModule], exports: [SharedLibComponent, OtherComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL3NoYXJlZC1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxVQUFVLENBQUM7O0FBV3pDLE1BQU0sT0FBTyxlQUFlO3lFQUFmLGVBQWU7NERBQWYsZUFBZTtnRUFKeEIsYUFBYTs7aUZBSUosZUFBZTtjQVAzQixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsY0FBYyxDQUFDO2dCQUNsRCxPQUFPLEVBQUU7b0JBQ1AsYUFBYTtpQkFDZDtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxjQUFjLENBQUM7YUFDOUM7O3dGQUNZLGVBQWUsbUJBTlgsa0JBQWtCLEVBQUUsY0FBYyxhQUUvQyxhQUFhLGFBRUwsa0JBQWtCLEVBQUUsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTaGFyZWRMaWJDb21wb25lbnQgfSBmcm9tICcuL3NoYXJlZC1saWIuY29tcG9uZW50JztcbmltcG9ydCB7IE90aGVyQ29tcG9uZW50IH0gZnJvbSAnLi9vdGhlci9vdGhlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXV0aExpYk1vZHVsZSB9IGZyb20gJ2F1dGgtbGliJztcblxuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1NoYXJlZExpYkNvbXBvbmVudCwgT3RoZXJDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQXV0aExpYk1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW1NoYXJlZExpYkNvbXBvbmVudCwgT3RoZXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlZExpYk1vZHVsZSB7IH1cbiJdfQ==