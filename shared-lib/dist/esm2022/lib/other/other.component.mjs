import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "auth-lib";
import * as i2 from "../shared-lib.service";
export class OtherComponent {
    service;
    libService;
    // user = 'A';
    user;
    data;
    constructor(service, libService) {
        this.service = service;
        this.libService = libService;
        this.user = this.service.user;
    }
    ngOnInit() {
        this.libService.data$.subscribe(data => this.data = data);
    }
    static ɵfac = function OtherComponent_Factory(t) { return new (t || OtherComponent)(i0.ɵɵdirectiveInject(i1.AuthLibService), i0.ɵɵdirectiveInject(i2.SharedLibService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OtherComponent, selectors: [["lib-other"]], decls: 2, vars: 1, template: function OtherComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1("User: ", ctx.user, "");
        } }, encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OtherComponent, [{
        type: Component,
        args: [{
                selector: 'lib-other',
                template: '<p>User: {{user}}</p>',
                // styleUrls: ['./other.component.css']
            }]
    }], () => [{ type: i1.AuthLibService }, { type: i2.SharedLibService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(OtherComponent, { className: "OtherComponent", filePath: "lib/other/other.component.ts", lineNumber: 10 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3RoZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9vdGhlci9vdGhlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7OztBQVNsRCxNQUFNLE9BQU8sY0FBYztJQU1MO0lBQWlDO0lBSnJELGNBQWM7SUFDZCxJQUFJLENBQUM7SUFDTCxJQUFJLENBQU07SUFFVixZQUFvQixPQUF1QixFQUFVLFVBQTRCO1FBQTdELFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBa0I7UUFDL0UsSUFBSSxDQUFFLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztJQUNqQyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDNUQsQ0FBQzt3RUFaVSxjQUFjOzZEQUFkLGNBQWM7WUFIZCx5QkFBRztZQUFBLFlBQWM7WUFBQSxpQkFBSTs7WUFBbEIsY0FBYztZQUFkLDZDQUFjOzs7aUZBR2pCLGNBQWM7Y0FMMUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyx1Q0FBdUM7YUFDeEM7O2tGQUNZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0aExpYlNlcnZpY2UgfSBmcm9tICdhdXRoLWxpYic7XG5pbXBvcnQgeyBTaGFyZWRMaWJTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkLWxpYi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW90aGVyJyxcbiAgdGVtcGxhdGU6ICc8cD5Vc2VyOiB7e3VzZXJ9fTwvcD4nLFxuICAvLyBzdHlsZVVybHM6IFsnLi9vdGhlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgT3RoZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIC8vIHVzZXIgPSAnQSc7XG4gIHVzZXI7XG4gIGRhdGE6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IEF1dGhMaWJTZXJ2aWNlLCBwcml2YXRlIGxpYlNlcnZpY2U6IFNoYXJlZExpYlNlcnZpY2UpIHtcbiAgICB0aGlzLiB1c2VyID0gdGhpcy5zZXJ2aWNlLnVzZXI7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmxpYlNlcnZpY2UuZGF0YSQuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5kYXRhID0gZGF0YSk7XG4gIH1cblxufVxuIl19