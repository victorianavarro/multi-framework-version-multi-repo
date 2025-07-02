import { OnInit } from '@angular/core';
import { AuthLibService } from 'auth-lib';
import { SharedLibService } from '../shared-lib.service';
import * as i0 from "@angular/core";
export declare class OtherComponent implements OnInit {
    private service;
    private libService;
    user: any;
    data: any;
    constructor(service: AuthLibService, libService: SharedLibService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OtherComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OtherComponent, "lib-other", never, {}, {}, never, never, false, never>;
}
