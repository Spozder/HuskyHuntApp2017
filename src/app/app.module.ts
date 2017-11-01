import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LocationsPage } from '../pages/locations/locations';
import { LocationDetailsModal } from '../pages/locations/location.modal';
import { MapPage } from '../pages/map/map';
import { HintsPage } from '../pages/hints/hints';
import { AddHintModal } from '../pages/hints/add-hint.modal';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { StoreModule } from '@ngrx/store';
import { initialAppState, appStateReducers } from '../common/state/app.state';

@NgModule({
  declarations: [
    MyApp,
    LocationsPage,
    MapPage,
    HintsPage,
    TabsPage,
    LocationDetailsModal,
    AddHintModal
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    StoreModule.forRoot(appStateReducers, {
      initialState: initialAppState
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LocationsPage,
    MapPage,
    HintsPage,
    TabsPage,
    LocationDetailsModal,
    AddHintModal
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
