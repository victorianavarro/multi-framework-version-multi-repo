import { Component, NgZone } from '@angular/core';
import { AuthLibService } from 'auth-lib';
import { ConfigService } from './config.service';
import { map } from 'rxjs';
import { SharedLibService } from 'shared-lib';

declare const require: any;

@Component({
  selector: 'shell-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public menuItems: any[] = [];
  public loadedData: any = null;
  title = 'shell';
  ngVersion = require('../../package.json').dependencies['@angular/core'];

  constructor(
    public authService: AuthLibService,
    private ngZone: NgZone,
    private configService: ConfigService,
    private sharedLibService: SharedLibService
  ) {
    // Not necessary anymore, when calling the bootstrap helper with appType: 'shell':
    // shareNgZone(ngZone);
    this.authService.login('Max', null);
    console.log('Shell: User logged in as:', this.authService.user);
  }

  ngOnInit() {
    this.configService.getMfeConfig().pipe(
      map(config => config.map(mfe => ({
        label: mfe.path.replace(/\/$/, ''), // Label can be customized further
        path: mfe.navigatePath || mfe.path
      })))
    ).subscribe(items => {
      this.menuItems = items;
    });

    // Load data and subscribe to see what's loaded
    this.sharedLibService.loadData('assets/dummyData.json');
    
    // Subscribe to see the loaded data
    this.sharedLibService.data$.subscribe(data => {
      this.loadedData = data;
      console.log('Shell: Data loaded:', data);
    });
  }
}

