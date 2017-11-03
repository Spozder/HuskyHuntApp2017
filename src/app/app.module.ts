import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LocationsPage } from '../pages/locations/locations';
import { LocationDetailsModal } from '../pages/locations/location.modal';
import { MapPage } from '../pages/map/map';
import { HintsPage } from '../pages/hints/hints';
import { AddHintModal } from '../pages/hints/add-hint.modal';
import { SolveHintModal } from '../pages/hints/solve-hint.modal';
import { AutocompleteModal } from '../pages/hints/autocomplete.modal';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { StoreModule } from '@ngrx/store';
import { initialAppState, appStateReducers } from '../common/state/app.state';

import { EffectsModule } from '@ngrx/effects';
import { HintEffects } from '../common/state/hint.effects';

@NgModule({
  declarations: [
    MyApp,
    LocationsPage,
    MapPage,
    HintsPage,
    TabsPage,
    LocationDetailsModal,
    AddHintModal,
    SolveHintModal,
    AutocompleteModal
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    StoreModule.forRoot(appStateReducers, {
      initialState: initialAppState
    }),
    EffectsModule.forRoot([HintEffects])
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LocationsPage,
    MapPage,
    HintsPage,
    TabsPage,
    LocationDetailsModal,
    AddHintModal,
    SolveHintModal,
    AutocompleteModal
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
