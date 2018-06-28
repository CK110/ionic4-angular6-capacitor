import { Component } from '@angular/core';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert-page',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Alert</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <ion-button (click)="clickMe()">Open Basic Alert</ion-button>
    </ion-content>
  `
})
export class AlertPageComponent {

  constructor(private alertController: AlertController) {}

  async clickMe() {
    const alert = await this.alertController.create({
      header: 'ohhhh snap',
      message: 'Ive been injected via Angular keeping the old api',
      buttons: [
        {
          text: 'Cancel',
          role: 'Cancel',
          handler: () => {
            // console.log('cancel');
          }
        },
        {
          text: 'Okay',
          role: 'Okay',
          handler: () => {
            // console.log('okay');
          }
        }
      ]
    });
    return alert.present();
  }

}
