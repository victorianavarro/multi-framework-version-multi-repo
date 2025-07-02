import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare class SharedLibService {
    private http;
    private dataSubject;
    data$: import("rxjs").Observable<any>;
    constructor(http: HttpClient);
    loadData(url: string): void;
    getData(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<SharedLibService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SharedLibService>;
}
