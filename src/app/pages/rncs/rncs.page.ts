import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { RncService } from './rnc.service'

export enum Regimen {
  NORMAL = "NORMAL",
  CANCEL = "CANCEL"
}

export interface Rnc {
  cedulaORnc: string;
  nombreRazonSocial: string;
  nombreComercial: string;
  regimenDePago: Regimen;
}

@Component({
  selector: 'app-rncs',
  templateUrl: './rncs.page.html',
  styleUrls: ['./rncs.page.scss'],
})
export class RncsPage implements OnInit {

  rncs: Rnc[] = [];

  constructor(
      private menuController: MenuController,
      private rncService: RncService
    ) { }

  ngOnInit() {
    this.rncs = this.rncService.obtenerRncs();
    console.log('NgInit');

    this.rncService.rncsObservador
      .subscribe(rncs => {
        this.rncs = rncs;
      })
  }

  ionViewDidEnter() {
    // this.rncs = this.rncService.obtenerRncs();
  }

  onClick() {
    this.menuController.open();
  }

}
