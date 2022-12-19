import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { LogComponent } from './log.component';



@NgModule({
  declarations: [
    LogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      {
        path: '',
        component: LogComponent,
      },
    ]),
  ]
})
export class LogModule { }
