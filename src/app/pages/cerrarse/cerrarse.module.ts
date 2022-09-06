import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CerrarsePageRoutingModule } from './cerrarse-routing.module';

import { CerrarsePage } from './cerrarse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CerrarsePageRoutingModule
  ],
  declarations: [CerrarsePage]
})
export class CerrarsePageModule {}
