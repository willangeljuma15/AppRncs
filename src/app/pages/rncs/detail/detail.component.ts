import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Rnc } from '../rncs.page';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})
export class DetailComponent implements OnInit {

  @Input() rnc: Rnc;

  constructor( private modalController: ModalController ) { }

  ngOnInit() {}

  onCloseModal() {
    this.modalController.dismiss();
  }

}
