import { Component } from '@angular/core';

import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast-page',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Toast</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <ion-button (click)="clickMe()">Open Basic Toast</ion-button>
    </ion-content>
  `
})
export class ToastPageComponent {

  constructor(private toastController: ToastController) {

  }

  async clickMe() {
    const toast = await this.toastController.create({
      closeButtonText: 'close dat toast',
      duration: 1000,
      message: 'Howdy ho toasty neighbor',
      position: 'bottom'
    });
    toast.present();
  }

}
