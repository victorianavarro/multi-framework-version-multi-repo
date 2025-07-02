import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import { APP_ROUTES } from './app.routes';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthLibModule } from 'auth-lib';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { SharedLibModule } from 'projects/shared-lib/src/public-api';
import { SharedLibModule } from 'shared-lib';
import { ModuleFederationToolsModule, WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConfigService } from './config.service';
import { take } from 'rxjs';
import { loadRemoteModule } from '@angular-architects/module-federation';


@NgModule({
  imports: [
    BrowserModule,
    AuthLibModule,
    SharedLibModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([]),
    ModuleFederationToolsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    DashboardComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private configService: ConfigService, private router: Router) {
    this.configService.getMfeConfig().pipe(take(1)).subscribe({
      next: (config) => {
        const mfeRoutes: Routes = [];

        config.forEach((mfe) => {
          if (mfe.componentType === 'remote') {
            console.log("Loading " + mfe.path);
            mfeRoutes.push({
              path: mfe.path,
              loadChildren: () => loadRemoteModule({
                type: 'module',
                remoteEntry: mfe.remoteEntry,
                exposedModule: mfe.exposedModule
              }).then(m => m[mfe.moduleName])
            });
          } else if (mfe.componentType === 'webComponent') {
            mfeRoutes.push({
              path: mfe.path,
              component: WebComponentWrapper,
              data: mfe.webComponentData as WebComponentWrapperOptions
            });
          }
        });

        // Add final route for NotFound
        mfeRoutes.push({ path: '**', component: NotFoundComponent });

        // Reset the router configuration
        const initialRoutes: Routes = [
          { path: '', component: HomeComponent, pathMatch: 'full' }
        ];

        this.router.resetConfig([...initialRoutes, ...mfeRoutes]);
      },
      error: (error) => { console.error('Error loading MFE configuration:', error) },
      complete: () => {
        console.log('Configuration loading complete');
      }
    });
  }
}
