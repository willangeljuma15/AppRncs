import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RncsPageRoutingModule } from './rncs-routing.module';

import { RncsPage } from './rncs.page';
import { RncComponent } from './rnc/rnc.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RncsPageRoutingModule,
  ],
  declarations: [RncsPage, RncComponent, DetailComponent]
})
export class RncsPageModule {}
