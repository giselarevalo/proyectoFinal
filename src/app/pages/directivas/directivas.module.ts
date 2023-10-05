import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DirectivasPageRoutingModule } from './directivas-routing.module';

import { DirectivasPage } from './directivas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DirectivasPageRoutingModule
  ],
  declarations: [DirectivasPage]
})
export class DirectivasPageModule {}
