import { OnInit } from '@angular/core';
import { AuthLibService } from './auth-lib.service';
import * as i0 from "@angular/core";
export declare class AuthLibComponent implements OnInit {
    private service;
    user: any;
    constructor(service: AuthLibService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthLibComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AuthLibComponent, "lib-auth-lib", never, {}, {}, never, never, false, never>;
}
