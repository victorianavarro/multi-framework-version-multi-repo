import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FlightsModule } from './flights/flights.module';
import { TestModule } from './test/test.module';
import { APP_ROUTES } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { SharedLibModule } from 'shared-lib';
import { AuthLibModule } from 'auth-lib';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthLibModule,
    SharedLibModule,
    FlightsModule,
    TestModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    HomeComponent,
    AppComponent,
  ],
  providers: [],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
