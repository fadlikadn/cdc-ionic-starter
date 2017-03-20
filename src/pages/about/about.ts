import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the About page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // console.dir(navParams.data);
    // console.log(navParams.data.id);
    // console.log(navParams.data.name);
    // console.log(navParams.data.description);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  ionViewWillEnter() {
    console.log("We are now entering the About view");
  }

  ionViewWillLeave() {
    console.log("We are now leaving the About view");
  }

}
