import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { LoginFirstComponent } from './login-first/login-first.component';
import { ModalComponent } from './modal/modal.component';
import { EditLogComponent } from './modal/modals/edit-log/edit-log.component';
import { TimerPipe } from './pipes/timer.pipe';
import { AutoFocusDirective } from './directives/auto-focus.directive';

const sharedComponents = [
  LoginFirstComponent,
  ModalComponent,
  EditLogComponent,
  TimerPipe
]
@NgModule({
  declarations: [
    sharedComponents,
    AutoFocusDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    
  ],
  exports: [
    sharedComponents
  ]
})
export class SharedModule {}
