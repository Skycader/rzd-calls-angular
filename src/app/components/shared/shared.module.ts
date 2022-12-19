import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { LoginFirstComponent } from './login-first/login-first.component';

const sharedComponents = [
  LoginFirstComponent,
]
@NgModule({
  declarations: [
    sharedComponents
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    sharedComponents
  ]
})
export class SharedModule {}
