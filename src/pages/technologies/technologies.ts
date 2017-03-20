import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Modals } from '../modals/modals';

/*
  Generated class for the Technologies page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-technologies',
  templateUrl: 'technologies.html'
})
export class TechnologiesPage {
  public technologies: Array<{name: string, date: string, summary: string, website: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.technologies = [
      {
        name: "Angular JS",
        date: "October 20th 2010",
        summary: "Web application framework developed and maintained by Google",
        website: "http://www.angular.org"
      },
      {
        name: "Apache Cordova",
        date: "2009",
        summary: "Develop mobile apps with HTML, CSS &amp; JS and publish to multiple platforms from one single codebase",
        website: "http://www.cordova.apache.org"
      },
      {
        name: "TypeScript",
        date: "October 1st 2012",
        summary: "Strict superset of Javascript developed and maintained by Microsoft",
        website: "http://www.typescriptlang.org"
      }
    ]
  }

  activateModal(link) {
    let modal = this.modalCtrl.create(Modals, link);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TechnologiesPage');
  }

}
