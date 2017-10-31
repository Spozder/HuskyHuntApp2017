import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { NavController } from 'ionic-angular';

import { Location } from '../../common/models/location.model';

import { AppState } from '../../common/state/app.state';

@Component({
  selector: 'page-locations',
  templateUrl: 'locations.html'
})
export class LocationsPage {
  locations: Observable<[Location]>;

  constructor(public navCtrl: NavController, private store: Store<AppState>) {
    this.locations = this.store.select('location', 'locationList');
  }

  locationTrackByFn(index: number, loc: Location) {
    return loc.hint.id;
  }

}
