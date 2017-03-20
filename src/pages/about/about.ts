import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';

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
  @ViewChild('picSlider') viewer: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // console.dir(navParams.data);
    // console.log(navParams.data.id);
    // console.log(navParams.data.name);
    // console.log(navParams.data.description);
  }

  ngAfterViewInit() {
    this.viewer.pager = true;
    this.viewer.speed = 750;
  }

  // slideOpts = {
  //   pager: true,
  //   speed: 750
  // };

  onSlideMoved() {
    let currIndex = this.viewer.getActiveIndex();
    let numSlides = this.viewer.length();
    let firstSlide = this.viewer.isBeginning();
    let lastSlide = this.viewer.isEnd();

    console.log(`Current index is, ${currIndex}`);
    if (firstSlide) {
      console.log(`This is the first slide of ${numSlides} slides`);
    } else if (lastSlide) {
      console.log(`This is the last slide of ${numSlides} slides`);
    }
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
