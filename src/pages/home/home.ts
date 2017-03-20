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
  public pages: Array<{title: string, thumb: string, description: string, link: any}>;
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
        thumb: 'assets/images/about.png',
        description: 'Who we are. What we do. Why we&rsquo;re here',
        link: AboutPage
      },
      {
        title: 'Contact Us',
        thumb: 'assets/images/contact.png',
        description: 'Drop us a line and get in touch we&rsquo;d love to hear from you!',
        link: ContactPage
      },
      {
        title: 'Tweets',
        thumb: 'assets/images/tweet.png',
        description: 'The latest news updates from our Twitter account',
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
    this.navCtrl.push(page);
  }

  buttonOne(page) {
    console.log(`I could do a lot more than just print out this message for the ${page} page to the browser console`);
  }

  buttonTwo(page) {
    console.log(`Yep, I'm an under-performer for the ${page} page too. :(`);
  }

}
