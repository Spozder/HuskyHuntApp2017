import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { NavController, ModalController, NavParams, ViewController } from 'ionic-angular';

import { Location } from '../../common/models/location.model';

import { AppState } from '../../common/state/app.state';
import { LocationDetailsModalState } from '../../common/state/location.state';
import { CloseLocationModalAction, OpenLocaitonModalAction } from '../../common/state/location.actions'; 

@Component({
    selector: 'location-details-modal',
    templateUrl: 'location.modal.html'
  })
  export class LocationDetailsModal {
    private loc: Location;
  
    constructor(params: NavParams, private store: Store<AppState>, public viewCtrl: ViewController) {
      this.loc = params.get('location');
      this.store.select('location', 'detailsModal').subscribe((state: LocationDetailsModalState) => {
          if (!state.open) {
              this.viewCtrl.dismiss();
          }
      })
    }
  
    dismiss() {
      this.store.dispatch(new CloseLocationModalAction())
    }
  }