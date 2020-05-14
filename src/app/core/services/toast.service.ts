import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable()
export class ToastService {

  constructor(private toastController: ToastController) { }

  presetToast(msg?, type?) {
    this.toastController.create({
      message: msg,
      duration: 2000,
      color: type
    }).then(toast => toast.present());
  }
}
