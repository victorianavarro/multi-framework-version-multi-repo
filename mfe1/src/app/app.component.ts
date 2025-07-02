import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedLibService } from 'shared-lib';

@Component({
  selector: 'mfe1-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  data: any;

  constructor(
    private libService: SharedLibService
  ) {
    console.debug('MFE1: Component constructor');
  }
  ngOnInit(): void {
    this.libService.data$.subscribe(data => {
      this.data = data; // Subscribe to observable for changes
    });
  }
}
