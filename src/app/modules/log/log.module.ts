import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { LogComponent } from './log.component';
import { AppModule } from "../../app.module";
import { LoginFirstComponent } from 'src/app/components/shared/login-first/login-first.component';
import { SharedModule } from 'src/app/components/shared/shared.module';


@NgModule({
    declarations: [
        LogComponent,
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
       SharedModule
    ]
})
export class LogModule { }
