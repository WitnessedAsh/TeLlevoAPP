import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosPerPageRoutingModule } from './datos-per-routing.module';

import { DatosPerPage } from './datos-per.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosPerPageRoutingModule
  ],
  declarations: [DatosPerPage]
})
export class DatosPerPageModule {}
