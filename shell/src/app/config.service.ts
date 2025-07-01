import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(private http: HttpClient) { }

  getMfeConfig(): Observable<any> {
    // Assumes the path to setup.json is correctly set
    return this.http.get('/assets/setup.json');
  }
}