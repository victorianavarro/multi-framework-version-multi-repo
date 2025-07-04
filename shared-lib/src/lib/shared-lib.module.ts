import { NgModule, ModuleWithProviders } from '@angular/core';
import { SharedLibComponent } from './shared-lib.component';
import { OtherComponent } from './other/other.component';
import { AuthLibModule } from 'auth-lib';
import { SharedLibService } from './shared-lib.service';


@NgModule({
  declarations: [SharedLibComponent, OtherComponent],
  imports: [
    AuthLibModule
  ],
  exports: [SharedLibComponent, OtherComponent],
})
export class SharedLibModule {
  static forRoot(): ModuleWithProviders<SharedLibModule> {
    return {
      ngModule: SharedLibModule,
      providers: [SharedLibService]
    };
  }
}
