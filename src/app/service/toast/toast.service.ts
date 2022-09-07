import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toastCtrl: ToastController) {}

  async presentToast(toastMessage: string, isDanger: boolean) {
    const toast = await this.toastCtrl.create({
      message: toastMessage,
      duration: 3000,
      animated: true,
      color: isDanger ? 'danger' : 'success',
      position: 'bottom',
    });
    toast.present();

    const { role } = await toast.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
