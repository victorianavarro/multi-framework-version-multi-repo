import { Component, OnInit } from '@angular/core';
import { AuthLibService } from 'auth-lib';
import { SharedLibService } from '../shared-lib.service';

@Component({
  selector: 'lib-other',
  template: '<p>User: {{user}}</p>',
  // styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  // user = 'A';
  user;
  data: any;

  constructor(private service: AuthLibService, private libService: SharedLibService) {
    this. user = this.service.user;
  }

  ngOnInit(): void {
    this.libService.data$.subscribe(data => this.data = data);
  }

}
