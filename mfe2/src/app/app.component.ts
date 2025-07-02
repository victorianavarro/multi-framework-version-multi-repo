import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedLibService } from 'shared-lib';

@Component({
  selector: 'mfe2-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  data: any;

  constructor(
    private libService: SharedLibService
  ) {
    console.debug('mfe2: Component constructor');
  }
  ngOnInit(): void {
    this.libService.data$.subscribe(data => {
      this.data = data; // Subscribe to observable for changes
      console.log('MFE2 : libService data ');
    });
  }
}
