import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class AuthLibService {
    userName;
    get user() {
        return this.userName;
    }
    constructor() { }
    login(userName, password) {
        // Authentication for **honest** users TM. (c) Manfred Steyer
        this.userName = userName;
    }
    static ɵfac = function AuthLibService_Factory(t) { return new (t || AuthLibService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthLibService, factory: AuthLibService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthLibService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [], null); })();

class AuthLibComponent {
    service;
    user;
    constructor(service) {
        this.service = service;
        this.user = this.service.user;
    }
    ngOnInit() {
    }
    static ɵfac = function AuthLibComponent_Factory(t) { return new (t || AuthLibComponent)(i0.ɵɵdirectiveInject(AuthLibService)); };
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
    }], () => [{ type: AuthLibService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AuthLibComponent, { className: "AuthLibComponent", filePath: "lib/auth-lib.component.ts", lineNumber: 9 }); })();

class AuthLibModule {
    static ɵfac = function AuthLibModule_Factory(t) { return new (t || AuthLibModule)(); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AuthLibModule });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({});
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthLibModule, [{
        type: NgModule,
        args: [{
                declarations: [AuthLibComponent],
                imports: [],
                exports: [AuthLibComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AuthLibModule, { declarations: [AuthLibComponent], exports: [AuthLibComponent] }); })();

/*
 * Public API Surface of auth-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AuthLibComponent, AuthLibModule, AuthLibService };
//# sourceMappingURL=auth-lib.mjs.map
