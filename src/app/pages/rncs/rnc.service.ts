import { Regimen, Rnc } from './rncs.page';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class RncService {

    rncs: Rnc[] = [
        {
          cedulaORnc: "101043598",
          nombreRazonSocial: "SCOTIABANK REPUBLICA DOMINICANA SA, BANCO MULTIPLE",
          nombreComercial: "SCOTIABANK REPUBLICA DOMINICANA",
          regimenDePago: Regimen.NORMAL
        },
        {
          cedulaORnc: "097-002444-6",
          nombreRazonSocial: "Willson Juma",
          nombreComercial: "Willson Juma Alcantara",
          regimenDePago: Regimen.NORMAL
        }
      ]

      rncsObservador: EventEmitter<Rnc[]> = new EventEmitter();

    constructor() {

        console.log('RNc Service Woks!!');

    }

    obtenerRncs() {
      return [...this.rncs];
    }

    create(newRnc: Rnc) {
      this.rncs.push(newRnc);
      console.log(this.rncs);
      this.rncsObservador.emit([...this.rncs]);
    }
}