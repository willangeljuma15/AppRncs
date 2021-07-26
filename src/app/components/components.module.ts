import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonCreateComponent } from './button-create/button-create.component';



@NgModule({
  declarations: [
    ButtonCreateComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ButtonCreateComponent
  ]
})
export class ComponentsModule { }
