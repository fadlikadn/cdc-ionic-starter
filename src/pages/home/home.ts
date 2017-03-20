import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { TweetsPage } from '../tweets/tweets';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public params: any;
  public pages: Array<{title: string, link: any}>;
  public isSuccess: boolean;
  public isError: boolean;
  public isWarning: boolean;
  public canProceed: boolean;

  constructor(public navCtrl: NavController) {
    // this.params = {
    //   id: 1,
    //   name: "Sample App",
    //   description: "A sample application for helping to learn Iconi 2"
    // }
    this.isSuccess = true;
    this.isError = false;
    this.isWarning = false;
    this.canProceed = true;

    this.pages = [
      {
        title: 'About',
        link: AboutPage
      },
      {
        title: 'Contact Us',
        link: ContactPage
      },
      {
        title: 'Tweets',
        link: TweetsPage
      }
    ];
  }

  elementClasses() {
    let classes = {
      isSuccess: this.isSuccess,
      isError: this.isError,
      isWarning: this.isWarning,
      canProceed: this.canProceed
    };
    return classes;
  }

  // setNavigationLink() {
  //   let opts = { animate: true, animation: "wp-transition", duration: 250}
  //   this.navCtrl.push(AboutPage, this.params, opts);
  // }

  setNavigationLink(page) {
    console.log(page);
    this.navCtrl.push(page.link);
  }

}
