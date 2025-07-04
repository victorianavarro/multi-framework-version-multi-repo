import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import * as i1 from '@angular/common/http';
import * as i1$1 from 'auth-lib';
import { AuthLibModule } from 'auth-lib';

class SharedLibService {
    http;
    dataSubject = new BehaviorSubject(null);
    data$ = this.dataSubject.asObservable();
    constructor(http) {
        this.http = http;
    }
    loadData(url) {
        this.http.get(url).pipe(map(response => {
            console.log("Shared lib: saving data in loadData");
            this.dataSubject.next(response);
        })).subscribe();
    }
    // Method to get the current value directly
    getData() {
        return this.dataSubject.value;
    }
    static ɵfac = function SharedLibService_Factory(t) { return new (t || SharedLibService)(i0.ɵɵinject(i1.HttpClient)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SharedLibService, factory: SharedLibService.ɵfac });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SharedLibService, [{
        type: Injectable
    }], () => [{ type: i1.HttpClient }], null); })();

class SharedLibComponent {
    constructor() { }
    ngOnInit() {
    }
    static ɵfac = function SharedLibComponent_Factory(t) { return new (t || SharedLibComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SharedLibComponent, selectors: [["lib-shared-component"]], decls: 3, vars: 0, template: function SharedLibComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "h1");
            i0.ɵɵtext(1, "Shared");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(2, "lib-auth-lib");
        } }, dependencies: [i1$1.AuthLibComponent], encapsulation: 2 });
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SharedLibComponent, { className: "SharedLibComponent", filePath: "lib\\shared-lib.component.ts", lineNumber: 10 }); })();

class OtherComponent {
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
    static ɵfac = function OtherComponent_Factory(t) { return new (t || OtherComponent)(i0.ɵɵdirectiveInject(i1$1.AuthLibService), i0.ɵɵdirectiveInject(SharedLibService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OtherComponent, selectors: [["lib-other"]], decls: 2, vars: 0, template: function OtherComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1, "Other component updated");
            i0.ɵɵelementEnd();
        } }, encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OtherComponent, [{
        type: Component,
        args: [{ selector: 'lib-other', template: "<!-- <p>User: {{user}}</p> -->\r\n<p>Other component updated</p>" }]
    }], () => [{ type: i1$1.AuthLibService }, { type: SharedLibService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(OtherComponent, { className: "OtherComponent", filePath: "lib\\other\\other.component.ts", lineNumber: 10 }); })();

class SharedLibModule {
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

/*
 * Public API Surface of shared-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { OtherComponent, SharedLibComponent, SharedLibModule, SharedLibService };
//# sourceMappingURL=shared-lib.mjs.map
