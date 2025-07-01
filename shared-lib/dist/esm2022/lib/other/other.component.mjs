import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "auth-lib";
export class OtherComponent {
    service;
    // user = 'A';
    user;
    constructor(service) {
        this.service = service;
        this.user = this.service.user;
    }
    ngOnInit() {
    }
    static ɵfac = function OtherComponent_Factory(t) { return new (t || OtherComponent)(i0.ɵɵdirectiveInject(i1.AuthLibService)); };
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
    }], () => [{ type: i1.AuthLibService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(OtherComponent, { className: "OtherComponent", filePath: "lib/other/other.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3RoZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9vdGhlci9vdGhlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7O0FBUWxELE1BQU0sT0FBTyxjQUFjO0lBSUw7SUFGcEIsY0FBYztJQUNkLElBQUksQ0FBQztJQUNMLFlBQW9CLE9BQXVCO1FBQXZCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3pDLElBQUksQ0FBRSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDakMsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDO3dFQVRVLGNBQWM7NkRBQWQsY0FBYztZQUhkLHlCQUFHO1lBQUEsWUFBYztZQUFBLGlCQUFJOztZQUFsQixjQUFjO1lBQWQsNkNBQWM7OztpRkFHakIsY0FBYztjQUwxQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLHVDQUF1QzthQUN4Qzs7a0ZBQ1ksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRoTGliU2VydmljZSB9IGZyb20gJ2F1dGgtbGliJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW90aGVyJyxcbiAgdGVtcGxhdGU6ICc8cD5Vc2VyOiB7e3VzZXJ9fTwvcD4nLFxuICAvLyBzdHlsZVVybHM6IFsnLi9vdGhlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgT3RoZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIC8vIHVzZXIgPSAnQSc7XG4gIHVzZXI7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogQXV0aExpYlNlcnZpY2UpIHtcbiAgICB0aGlzLiB1c2VyID0gdGhpcy5zZXJ2aWNlLnVzZXI7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG59XG4iXX0=