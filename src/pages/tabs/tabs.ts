import { Component } from '@angular/core';

import { LocationsPage } from '../locations/locations';
import { MapPage } from '../map/map';
import { HintsPage } from '../hints/hints';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HintsPage;
  tab2Root = LocationsPage;
  tab3Root = MapPage;

  constructor() {

  }
}
