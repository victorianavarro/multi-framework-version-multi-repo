import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class SharedLibService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLWxpYi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9zaGFyZWQtbGliLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLEdBQUcsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0FBSTVDLE1BQU0sT0FBTyxnQkFBZ0I7SUFLakI7SUFKRixXQUFXLEdBQUcsSUFBSSxlQUFlLENBQU0sSUFBSSxDQUFDLENBQUM7SUFDOUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7SUFFL0MsWUFDVSxJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQ3RCLENBQUM7SUFFTCxRQUFRLENBQUMsR0FBVztRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQzFCLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLENBQUMsQ0FBQTtZQUNsRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FDSCxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCwyQ0FBMkM7SUFDM0MsT0FBTztRQUNMLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7SUFDaEMsQ0FBQzswRUFwQlUsZ0JBQWdCO2dFQUFoQixnQkFBZ0IsV0FBaEIsZ0JBQWdCOztpRkFBaEIsZ0JBQWdCO2NBRDVCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgbWFwIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTaGFyZWRMaWJTZXJ2aWNlIHtcclxuICBwcml2YXRlIGRhdGFTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KG51bGwpO1xyXG4gIHB1YmxpYyBkYXRhJCA9IHRoaXMuZGF0YVN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50XHJcbiAgKSB7IH1cclxuXHJcbiAgbG9hZERhdGEodXJsOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuaHR0cC5nZXQ8YW55Pih1cmwpLnBpcGUoXHJcbiAgICAgIG1hcChyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTaGFyZWQgbGliOiBzYXZpbmcgZGF0YSBpbiBsb2FkRGF0YVwiKVxyXG4gICAgICAgIHRoaXMuZGF0YVN1YmplY3QubmV4dChyZXNwb25zZSk7XHJcbiAgICAgIH0pXHJcbiAgICApLnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gTWV0aG9kIHRvIGdldCB0aGUgY3VycmVudCB2YWx1ZSBkaXJlY3RseVxyXG4gIGdldERhdGEoKTogYW55IHtcclxuICAgIHJldHVybiB0aGlzLmRhdGFTdWJqZWN0LnZhbHVlO1xyXG4gIH1cclxufVxyXG4iXX0=