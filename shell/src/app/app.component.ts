import { Component, NgZone } from '@angular/core';
import { AuthLibService } from 'auth-lib';
import { ConfigService } from './config.service';
import { map } from 'rxjs';

declare const require: any;

@Component({
  selector: 'shell-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public menuItems: any[] = [];
  title = 'shell';
  ngVersion = require('../../package.json').dependencies['@angular/core'];

  constructor(
    private service: AuthLibService,
    private ngZone: NgZone,
    private configService: ConfigService) {
    // Not necessary anymore, when calling the bootstrap helper with appType: 'shell':
    // shareNgZone(ngZone);
    this.service.login('Max', null);
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
  }
}

