import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicModule } from '@ionic/angular';

import { MapboxPageRoutingModule } from './mapbox-routing.module';

import { MapboxPage } from './mapbox.page';
//import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapboxPageRoutingModule,
  ],
  declarations: [MapboxPage]
})
export class MapboxPageModule {}
