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
    IonicModule.forRoot(MyApp)
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
