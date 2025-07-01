import * as i0 from "@angular/core";
export declare class AuthLibService {
    private userName;
    get user(): string;
    constructor();
    login(userName: string, password: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthLibService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthLibService>;
}
