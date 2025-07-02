import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-shared-component',
  template: `
    <h1>Shared</h1>
    <lib-auth-lib></lib-auth-lib>
  `
})
export class SharedLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
