import { Component, Input, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { Rnc } from '../rncs.page';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})
export class DetailComponent implements OnInit {

  @Input() rnc: Rnc;

  constructor(
      private modalController: ModalController,
      private actionSheet: ActionSheetController
    ) { }

  ngOnInit() {}

  onCloseModal() {
    this.modalController.dismiss();
  }

  async onActionSheet() {
    const actionSheet = await this.actionSheet.create({
      buttons: [
        {
          text: 'Agregar a Favoritos',
          icon: 'star-outline',
          handler: () => {
            console.log('Compartiendo el Rnc!!!');
          }
        },
        {
          text: 'compartir en Redes',
          icon: 'share-outline',
          handler: () => {
            console.log('Compartiendo el Rnc!!!');
          }
        },
        {
          text: 'Eliminar este registro',
          icon: 'trash-outline',
          cssClass: 'action-btn-eiminar',
          handler: () => {
            console.log('Eliminar el Rnc!!!');
          }
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log("Cancelaste!!!");
          }
        }
      ]
    });
    await actionSheet.present();
  }

}
