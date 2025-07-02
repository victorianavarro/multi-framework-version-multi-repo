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
            this.dataSubject.next(response);
        })).subscribe();
    }
    // Method to get the current value directly
    getData() {
        return this.dataSubject.value;
    }
    static ɵfac = function SharedLibService_Factory(t) { return new (t || SharedLibService)(i0.ɵɵinject(i1.HttpClient)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SharedLibService, factory: SharedLibService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SharedLibService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.HttpClient }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLWxpYi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9zaGFyZWQtbGliLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLEdBQUcsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0FBTTVDLE1BQU0sT0FBTyxnQkFBZ0I7SUFLakI7SUFKRixXQUFXLEdBQUcsSUFBSSxlQUFlLENBQU0sSUFBSSxDQUFDLENBQUM7SUFDOUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7SUFFL0MsWUFDVSxJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQ3RCLENBQUM7SUFFTCxRQUFRLENBQUMsR0FBVztRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQzFCLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNiLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUNILENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELDJDQUEyQztJQUMzQyxPQUFPO1FBQ0wsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztJQUNoQyxDQUFDOzBFQW5CVSxnQkFBZ0I7Z0VBQWhCLGdCQUFnQixXQUFoQixnQkFBZ0IsbUJBRmYsTUFBTTs7aUZBRVAsZ0JBQWdCO2NBSDVCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgbWFwIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTaGFyZWRMaWJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBkYXRhU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55PihudWxsKTtcbiAgcHVibGljIGRhdGEkID0gdGhpcy5kYXRhU3ViamVjdC5hc09ic2VydmFibGUoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnRcbiAgKSB7IH1cblxuICBsb2FkRGF0YSh1cmw6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuaHR0cC5nZXQ8YW55Pih1cmwpLnBpcGUoXG4gICAgICBtYXAocmVzcG9uc2UgPT4ge1xuICAgICAgICB0aGlzLmRhdGFTdWJqZWN0Lm5leHQocmVzcG9uc2UpO1xuICAgICAgfSlcbiAgICApLnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLy8gTWV0aG9kIHRvIGdldCB0aGUgY3VycmVudCB2YWx1ZSBkaXJlY3RseVxuICBnZXREYXRhKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVN1YmplY3QudmFsdWU7XG4gIH1cbn1cbiJdfQ==