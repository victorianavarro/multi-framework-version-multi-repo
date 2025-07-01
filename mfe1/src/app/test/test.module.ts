import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthLibModule } from 'auth-lib';
import { SharedLibModule } from 'shared-lib';
import { TestComponent } from './test.component';
import { TEST_ROUTES } from './test.routes';

@NgModule({
  imports: [
    CommonModule,
    AuthLibModule,
    SharedLibModule,
    RouterModule.forChild(TEST_ROUTES)
  ],
  declarations: [
    TestComponent
  ]
})
export class TestModule { }
