import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

enum Regimen {
  NORMAL = "NORMAL",
  CANCEL = "CANCEL"
}

export interface Rnc {
  cedulaORnc: string;
  razonSocial: string;
  nombreComercial: string;
  regimenDePago: Regimen;
}

@Component({
  selector: 'app-rncs',
  templateUrl: './rncs.page.html',
  styleUrls: ['./rncs.page.scss'],
})
export class RncsPage implements OnInit {

  rncs: Rnc[] = [
    {
      cedulaORnc: "101043598",
      razonSocial: "SCOTIABANK REPUBLICA DOMINICANA SA, BANCO MULTIPLE",
      nombreComercial: "SCOTIABANK REPUBLICA DOMINICANA",
      regimenDePago: Regimen.NORMAL
    },
    {
      cedulaORnc: "097-002444-6",
      razonSocial: "Willson Juma",
      nombreComercial: "Willson Juma Alcantara",
      regimenDePago: Regimen.NORMAL
    }
  ]

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  onClick() {
    this.menuController.open();
  }

}
