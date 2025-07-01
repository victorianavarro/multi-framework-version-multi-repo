import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./auth-lib.service";
export class AuthLibComponent {
    service;
    user;
    constructor(service) {
        this.service = service;
        this.user = this.service.user;
    }
    ngOnInit() {
    }
    static ɵfac = function AuthLibComponent_Factory(t) { return new (t || AuthLibComponent)(i0.ɵɵdirectiveInject(i1.AuthLibService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AuthLibComponent, selectors: [["lib-auth-lib"]], decls: 2, vars: 1, template: function AuthLibComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" User: ", ctx.user, "\n");
        } }, styles: ["p[_ngcontent-%COMP%]{color:#00f}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthLibComponent, [{
        type: Component,
        args: [{ selector: 'lib-auth-lib', template: "<p>\n    User: {{user}}\n</p>", styles: ["p{color:#00f}\n"] }]
    }], () => [{ type: i1.AuthLibService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AuthLibComponent, { className: "AuthLibComponent", filePath: "lib/auth-lib.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1saWIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9hdXRoLWxpYi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi9zcmMvbGliL2F1dGgtbGliLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7OztBQVFsRCxNQUFNLE9BQU8sZ0JBQWdCO0lBSVA7SUFGcEIsSUFBSSxDQUFDO0lBRUwsWUFBb0IsT0FBdUI7UUFBdkIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDekMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztJQUNoQyxDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7MEVBVFUsZ0JBQWdCOzZEQUFoQixnQkFBZ0I7WUNSN0IseUJBQUc7WUFDQyxZQUNKO1lBQUEsaUJBQUk7O1lBREEsY0FDSjtZQURJLGdEQUNKOzs7aUZETWEsZ0JBQWdCO2NBTDVCLFNBQVM7MkJBQ0UsY0FBYzs7a0ZBSWIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF1dGhMaWJTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLWxpYi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWF1dGgtbGliJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2F1dGgtbGliLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYXV0aC1saWIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhMaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHVzZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBBdXRoTGliU2VydmljZSkge1xuICAgIHRoaXMudXNlciA9IHRoaXMuc2VydmljZS51c2VyO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxufVxuIiwiPHA+XG4gICAgVXNlcjoge3t1c2VyfX1cbjwvcD4iXX0=