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
        this.libService.data$.subscribe(data => {
            this.data = data;
            console.log(data);
        });
    }
    static ɵfac = function OtherComponent_Factory(t) { return new (t || OtherComponent)(i0.ɵɵdirectiveInject(i1.AuthLibService), i0.ɵɵdirectiveInject(i2.SharedLibService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OtherComponent, selectors: [["lib-other"]], decls: 2, vars: 0, template: function OtherComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1, "Other component updated");
            i0.ɵɵelementEnd();
        } }, encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OtherComponent, [{
        type: Component,
        args: [{ selector: 'lib-other', template: "<!-- <p>User: {{user}}</p> -->\r\n<p>Other component updated</p>" }]
    }], () => [{ type: i1.AuthLibService }, { type: i2.SharedLibService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(OtherComponent, { className: "OtherComponent", filePath: "lib\\other\\other.component.ts", lineNumber: 10 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3RoZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9vdGhlci9vdGhlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9zcmMvbGliL290aGVyL290aGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozs7QUFTbEQsTUFBTSxPQUFPLGNBQWM7SUFNTDtJQUFpQztJQUpyRCxjQUFjO0lBQ2QsSUFBSSxDQUFDO0lBQ0wsSUFBSSxDQUFNO0lBRVYsWUFBb0IsT0FBdUIsRUFBVSxVQUE0QjtRQUE3RCxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUFVLGVBQVUsR0FBVixVQUFVLENBQWtCO1FBQy9FLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDaEMsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDckMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNuQixDQUFDLENBQ0EsQ0FBQztJQUNKLENBQUM7d0VBaEJVLGNBQWM7NkRBQWQsY0FBYztZQ1IzQix5QkFBRztZQUFBLHVDQUF1QjtZQUFBLGlCQUFJOzs7aUZEUWpCLGNBQWM7Y0FMMUIsU0FBUzsyQkFDRSxXQUFXOztrRkFJVixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQXV0aExpYlNlcnZpY2UgfSBmcm9tICdhdXRoLWxpYic7XHJcbmltcG9ydCB7IFNoYXJlZExpYlNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQtbGliLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItb3RoZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9vdGhlci5jb21wb25lbnQuaHRtbCdcclxuICAvLyBzdHlsZVVybHM6IFsnLi9vdGhlci5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE90aGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgLy8gdXNlciA9ICdBJztcclxuICB1c2VyO1xyXG4gIGRhdGE6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBBdXRoTGliU2VydmljZSwgcHJpdmF0ZSBsaWJTZXJ2aWNlOiBTaGFyZWRMaWJTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLnVzZXIgPSB0aGlzLnNlcnZpY2UudXNlcjtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5saWJTZXJ2aWNlLmRhdGEkLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8IS0tIDxwPlVzZXI6IHt7dXNlcn19PC9wPiAtLT5cclxuPHA+T3RoZXIgY29tcG9uZW50IHVwZGF0ZWQ8L3A+Il19