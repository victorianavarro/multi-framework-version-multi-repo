import { HttpClient } from '@angular/common/http';
import {Component, ViewChild, ViewContainerRef, Inject, Injector, ComponentFactoryResolver, OnInit} from '@angular/core';
import { AuthLibService } from 'auth-lib';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html'
})
export class TestComponent {

  user = '';

  constructor(http: HttpClient, auth: AuthLibService) {
    console.debug('mfe2 Test: Component constructor');
    this.user = auth.user;
  }

}
