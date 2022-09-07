import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  constructor(private loadingCtrl: LoadingController) {}

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      animated: true,
      spinner: 'bubbles',
      message: 'Please wait...',
      duration: 3000,
      cssClass: 'custom-loading',
    });
    loading.present();
  }

  dismissLoading() {
    this.loadingCtrl.dismiss();
    console.log('loading  dismissed');
  }
}
