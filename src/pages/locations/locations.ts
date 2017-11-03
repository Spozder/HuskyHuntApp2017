import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { NavController, ModalController, NavParams } from 'ionic-angular';

import { LocationDetailsModal } from './location.modal';

import { Location } from '../../common/models/location.model';

import { AppState } from '../../common/state/app.state';
import { LocationDetailsModalState } from '../../common/state/location.state';
import {
  GetLocationsRequestAction,
  CloseLocationModalAction,
  OpenLocaitonModalAction,
  SetDistanceSortRequestAction
} from '../../common/state/location.actions';
import { GetHintsRequestAction } from '../../common/state/hint.actions';

@Component({
  selector: 'page-locations',
  templateUrl: 'locations.html'
})
export class LocationsPage {
  locations: Observable<Location[]>;

  constructor(public modalCtrl: ModalController,
    public navCtrl: NavController, private store: Store<AppState>) {
      this.locations = this.store.select('location', 'locationList');
      this.store.select('location', 'detailsModal').subscribe((modalState: LocationDetailsModalState) => {
        if (modalState.open) {
          const locationDetailsModal = this.modalCtrl.create(LocationDetailsModal, {location: modalState.loc});
          locationDetailsModal.present();
        }
      })
  }

  locationTrackByFn(index: number, loc: Location) {
    return loc.hint.id;
  }

  openModal(loc: Location) {
    this.store.dispatch(new OpenLocaitonModalAction(loc));
  }

  refresh() {
    this.store.dispatch(new GetHintsRequestAction());
    this.store.dispatch(new GetLocationsRequestAction());
  }

  sortByDistance() {
    this.store.dispatch(new SetDistanceSortRequestAction());
  }

}