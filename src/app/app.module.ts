import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { TechnologiesPage } from '../pages/technologies/technologies';
import { TweetsPage } from '../pages/tweets/tweets';
import { Modals } from '../pages/modals/modals';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    ContactPage,
    TweetsPage,
    TechnologiesPage,
    Modals,
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      platforms: {
        android: {
          backButtonText: "",
          backButtonIcon: "md-arrow-back",
          iconMode: "md",
          modalEnter: "modal-md-slide-in",
          modalLeave: "modal-md-slider-out",
          pageTransition: "md",
        },
        ios: {
          backButtonText: "Previous",
          backButtonIcon: "ios-arrow-back",
          iconMode: "ios",
          modalEnter: "modal-ios-slide-in",
          modalLeave: "modal-ios-slider-out",
          pageTransition: "ios",
        }
      }
          
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    ContactPage,
    TweetsPage,
    TechnologiesPage,
    Modals
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
