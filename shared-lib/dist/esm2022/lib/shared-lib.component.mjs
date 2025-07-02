import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "auth-lib";
export class SharedLibComponent {
    constructor() { }
    ngOnInit() {
    }
    static ɵfac = function SharedLibComponent_Factory(t) { return new (t || SharedLibComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SharedLibComponent, selectors: [["lib-shared-component"]], decls: 3, vars: 0, template: function SharedLibComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "h1");
            i0.ɵɵtext(1, "Shared");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(2, "lib-auth-lib");
        } }, dependencies: [i1.AuthLibComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SharedLibComponent, [{
        type: Component,
        args: [{
                selector: 'lib-shared-component',
                template: `
    <h1>Shared</h1>
    <lib-auth-lib></lib-auth-lib>
  `
            }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SharedLibComponent, { className: "SharedLibComponent", filePath: "lib/shared-lib.component.ts", lineNumber: 10 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLWxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL3NoYXJlZC1saWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7OztBQVNsRCxNQUFNLE9BQU8sa0JBQWtCO0lBRTdCLGdCQUFnQixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOzRFQUxVLGtCQUFrQjs2REFBbEIsa0JBQWtCO1lBSjNCLDBCQUFJO1lBQUEsc0JBQU07WUFBQSxpQkFBSztZQUNmLCtCQUE2Qjs7O2lGQUdwQixrQkFBa0I7Y0FQOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRTs7O0dBR1Q7YUFDRjs7a0ZBQ1ksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXNoYXJlZC1jb21wb25lbnQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxoMT5TaGFyZWQ8L2gxPlxuICAgIDxsaWItYXV0aC1saWI+PC9saWItYXV0aC1saWI+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVkTGliQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbn1cbiJdfQ==