import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SharedLibService {
  private dataSubject = new BehaviorSubject<any>(null);
  public data$ = this.dataSubject.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  loadData(url: string): void {
    this.http.get<any>(url).pipe(
      map(response => {
        console.log("Shared lib: saving data in loadData")
        this.dataSubject.next(response);
      })
    ).subscribe();
  }

  // Method to get the current value directly
  getData(): any {
    return this.dataSubject.value;
  }
}
