import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { AuthComponent } from './auth.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignOutComponent } from './components/sign-out/sign-out.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

@NgModule({
  declarations: [AuthComponent, SignInComponent, SignUpComponent, SignOutComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: AuthComponent,
      },
    ]),
  ],
})
export class AuthModule {}
