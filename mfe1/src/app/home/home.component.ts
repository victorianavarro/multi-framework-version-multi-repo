import { Component, OnInit } from '@angular/core';
import { SharedLibService } from 'shared-lib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
data: any;
  constructor(
      private libService: SharedLibService
    ) {
      console.debug('MFE1: Component constructor');
    }

  ngOnInit() {
    console.debug('HomeComponent initialized');
    this.libService.data$.subscribe(data => {
      this.data = data; // Subscribe to observable for changes
      console.log('MFE1 : Home component libService data ', this.data);
    });
  }

}
