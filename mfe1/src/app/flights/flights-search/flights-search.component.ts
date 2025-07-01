import { HttpClient } from '@angular/common/http';
import {Component, ViewChild, ViewContainerRef, Inject, Injector, ComponentFactoryResolver, OnInit} from '@angular/core';
import { AuthLibService } from 'auth-lib';


@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html'
})
export class FlightsSearchComponent {

  user = '';

  constructor(http: HttpClient, auth: AuthLibService) {
    console.debug('MFE1 Flights search: Component constructor');
    this.user = auth.user;
  }

}

