import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar'

const MaterialComponents = [
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatToolbarModule,
]

@NgModule({
  imports: [],
  exports: [MaterialComponents]

})
export class MaterialModule { }