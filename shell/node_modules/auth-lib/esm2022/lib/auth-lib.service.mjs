import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class AuthLibService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1saWIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvYXV0aC1saWIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUszQyxNQUFNLE9BQU8sY0FBYztJQUVqQixRQUFRLENBQVM7SUFFekIsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQztJQUVWLEtBQUssQ0FBQyxRQUFnQixFQUFFLFFBQWdCO1FBQzdDLDZEQUE2RDtRQUM3RCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO3dFQWJVLGNBQWM7Z0VBQWQsY0FBYyxXQUFkLGNBQWMsbUJBRmIsTUFBTTs7aUZBRVAsY0FBYztjQUgxQixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhMaWJTZXJ2aWNlIHtcblxuICBwcml2YXRlIHVzZXJOYW1lOiBzdHJpbmc7XG5cbiAgcHVibGljIGdldCB1c2VyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudXNlck5hbWU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHB1YmxpYyBsb2dpbih1c2VyTmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogdm9pZCB7XG4gICAgLy8gQXV0aGVudGljYXRpb24gZm9yICoqaG9uZXN0KiogdXNlcnMgVE0uIChjKSBNYW5mcmVkIFN0ZXllclxuICAgIHRoaXMudXNlck5hbWUgPSB1c2VyTmFtZTtcbiAgfVxuXG59XG4iXX0=