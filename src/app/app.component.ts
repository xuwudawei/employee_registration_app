import { Component } from '@angular/core';
import { OneSignal } from '@awesome-cordova-plugins/onesignal/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private oneSignal: OneSignal) {
    this.init();

  }
  init(){
    this.oneSignal.startInit('64b52e03-cbda-4216-8186-397dfb5dd4fb', '263622085513');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    this.oneSignal.handleNotificationReceived().subscribe(() => {
    // do something when notification is received
    });

    this.oneSignal.handleNotificationOpened().subscribe(() => {
      // do something when a notification is opened
    });

    this.oneSignal.endInit();

  }
}
