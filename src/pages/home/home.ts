import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var cordova: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public timeLeft:number=18;
  timeHandler:number=-1;

  constructor(public navCtrl: NavController) {

  }

  go() {
    alert("吸烟有害健康");
    this.scheduleDelayed();
    clearInterval(this.timeHandler);
    this.timeLeft=3600;
    this.timeHandler= setInterval(()=>{this.timeLeft=this.timeLeft-1;},1000);
  }

  scheduleDelayed() {
    var now = new Date().getTime(),
      _1_hour_from_now = new Date(now + 3600 * 1000);
    var sound = 'file://StaringAtYou.mp3';
    cordova.plugins.notification.local.schedule({
      id: 1,
      title: 'Scheduled with delay',
      text: 'Test Message 1',
      at: _1_hour_from_now,
      sound: sound,
      badge: 12
    });

    // cordova.plugins.notification.local.on("click", (notification) =>{
    //   //alert("ok");
    //   this.scheduleDelayed();
    // });
  };



}
