import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'mfe1-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  constructor(http: HttpClient) {
    console.debug('MFE1: Component constructor');
  }
}
