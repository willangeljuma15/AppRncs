import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

// Pages

import { RncsPageRoutingModule } from './rncs-routing.module';
import { RncsPage } from './rncs.page';


// Components

import { RncComponent } from './rnc/rnc.component';
import { DetailComponent } from './detail/detail.component';

// Modulo creados Mios
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RncsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RncsPage, RncComponent, DetailComponent]
})
export class RncsPageModule {}
