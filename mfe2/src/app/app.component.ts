import { Component, OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { SharedLibService } from 'shared-lib';
import { AuthLibService } from 'auth-lib';

@Component({
  selector: 'mfe2-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  data: any;
  user: string;

  constructor(
    private libService: SharedLibService,
    private authService: AuthLibService
  ) {
    console.debug('MFE2: Component constructor');
  }
  
  ngOnInit(): void {
    // Subscribe to shared data
    this.libService.data$.subscribe(data => {
      this.data = data;
      console.log('MFE2 : libService data received:', data);
    });
    
    // Get authenticated user
    this.user = this.authService.user;
    console.log('MFE2 : Auth user:', this.user);
    
    // Also check current data value
    const currentData = this.libService.getData();
    console.log('MFE2 : Current data value:', currentData);
  }
}
