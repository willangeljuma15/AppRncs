import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

// Modal
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-rnc',
  templateUrl: './rnc.component.html'
})
export class RncComponent implements OnInit {

  @Input() rncs = [];

  constructor( private modalController: ModalController ) { }

  ngOnInit() {}

  async onClick(rnc: any) {
    const modal = await this.modalController.create({
      component: DetailComponent,
      componentProps: { rnc }
    });
    await modal.present();
  }

}
