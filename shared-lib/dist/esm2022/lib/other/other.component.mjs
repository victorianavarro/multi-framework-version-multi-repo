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
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OtherComponent, selectors: [["lib-other"]], decls: 4, vars: 2, template: function OtherComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "p");
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1("User: ", ctx.user, "");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("Lib data: ", ctx.data, "");
        } }, encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OtherComponent, [{
        type: Component,
        args: [{ selector: 'lib-other', template: "<p>User: {{user}}</p>\n<p>Lib data: {{ data }}</p>" }]
    }], () => [{ type: i1.AuthLibService }, { type: i2.SharedLibService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(OtherComponent, { className: "OtherComponent", filePath: "lib/other/other.component.ts", lineNumber: 10 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3RoZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9vdGhlci9vdGhlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9zcmMvbGliL290aGVyL290aGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozs7QUFTbEQsTUFBTSxPQUFPLGNBQWM7SUFNTDtJQUFpQztJQUpyRCxjQUFjO0lBQ2QsSUFBSSxDQUFDO0lBQ0wsSUFBSSxDQUFNO0lBRVYsWUFBb0IsT0FBdUIsRUFBVSxVQUE0QjtRQUE3RCxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUFVLGVBQVUsR0FBVixVQUFVLENBQWtCO1FBQy9FLElBQUksQ0FBRSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDakMsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQzVELENBQUM7d0VBWlUsY0FBYzs2REFBZCxjQUFjO1lDVDNCLHlCQUFHO1lBQUEsWUFBYztZQUFBLGlCQUFJO1lBQ3JCLHlCQUFHO1lBQUEsWUFBb0I7WUFBQSxpQkFBSTs7WUFEeEIsY0FBYztZQUFkLDZDQUFjO1lBQ2QsZUFBb0I7WUFBcEIsaURBQW9COzs7aUZEUVYsY0FBYztjQUwxQixTQUFTOzJCQUNFLFdBQVc7O2tGQUlWLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0aExpYlNlcnZpY2UgfSBmcm9tICdhdXRoLWxpYic7XG5pbXBvcnQgeyBTaGFyZWRMaWJTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkLWxpYi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW90aGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL290aGVyLmNvbXBvbmVudC5odG1sJ1xuICAvLyBzdHlsZVVybHM6IFsnLi9vdGhlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgT3RoZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIC8vIHVzZXIgPSAnQSc7XG4gIHVzZXI7XG4gIGRhdGE6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IEF1dGhMaWJTZXJ2aWNlLCBwcml2YXRlIGxpYlNlcnZpY2U6IFNoYXJlZExpYlNlcnZpY2UpIHtcbiAgICB0aGlzLiB1c2VyID0gdGhpcy5zZXJ2aWNlLnVzZXI7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmxpYlNlcnZpY2UuZGF0YSQuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5kYXRhID0gZGF0YSk7XG4gIH1cblxufVxuIiwiPHA+VXNlcjoge3t1c2VyfX08L3A+XG48cD5MaWIgZGF0YToge3sgZGF0YSB9fTwvcD4iXX0=