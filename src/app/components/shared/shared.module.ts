import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { LoginFirstComponent } from './login-first/login-first.component';
import { ModalComponent } from './modal/modal.component';
import { EditLogComponent } from './modal/modals/edit-log/edit-log.component';

const sharedComponents = [
  LoginFirstComponent,
  ModalComponent,
  EditLogComponent
]
@NgModule({
  declarations: [
    sharedComponents,
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
