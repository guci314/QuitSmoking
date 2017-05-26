import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var cordova: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @Input("delay")
  public delay:number=60;
  public timeLeft: number = 18;
  timeHandler: number = -1;

  constructor(public navCtrl: NavController) {

  }

  go() {
    alert("吸烟有害健康");
    this.scheduleDelayed();
    clearInterval(this.timeHandler);
    this.timeLeft = this.delay*60;
    this.timeHandler = setInterval(() => { this.timeLeft = this.timeLeft - 1; }, 1000);
  }

  scheduleDelayed() {
    var now = new Date().getTime(),
      at = new Date(now + this.delay*60 * 1000);
    var sound = 'file://StaringAtYou.mp3';
    cordova.plugins.notification.local.schedule({
      id: 1,
      title: 'Scheduled with delay',
      text: 'Test Message 1',
      at: at,
      //every:'minute',
      sound: sound,
      badge: 12
    });

    // cordova.plugins.notification.local.on("click", (notification) =>{
    //   //alert("ok");
    //   this.scheduleDelayed();
    // });
  };

  repeate() {
    alert("ok");
    var now = new Date().getTime();
    cordova.plugins.notification.local.schedule({
      id:1,
      text: "Delayed Notification",
      firstAt: new Date(now + 1 * 1000),
      every: "minute"
      //icon: "file://img/logo.png"
    });
  }


}
