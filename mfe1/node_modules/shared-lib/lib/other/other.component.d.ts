import { OnInit } from '@angular/core';
import { AuthLibService } from 'auth-lib';
import * as i0 from "@angular/core";
export declare class OtherComponent implements OnInit {
    private service;
    user: any;
    constructor(service: AuthLibService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OtherComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OtherComponent, "lib-other", never, {}, {}, never, never, false, never>;
}
