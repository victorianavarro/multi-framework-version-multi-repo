import { Component, OnInit } from '@angular/core';
import { AuthLibService } from 'auth-lib';

@Component({
  selector: 'lib-other',
  template: '<p>User: {{user}}</p>',
  // styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  // user = 'A';
  user;
  constructor(private service: AuthLibService) {
    this. user = this.service.user;
  }

  ngOnInit(): void {
  }

}
